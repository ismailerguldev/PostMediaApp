import { FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IPost } from '../../../models/Post'
import { getPosts } from '../../../services/PostService'
import { styles } from './styles'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'
import Post from './Post/Post'

const PostsSection: React.FC = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    const insets: EdgeInsets = useSafeAreaInsets()
    useEffect(() => {
        (
            async (): Promise<void> => {
                const resposts: IPost[] = await getPosts()
                const normalizedPosts: IPost[] = resposts.map(p => ({
                    ...p,
                    likeCount: Math.floor(Math.random() * 11),
                    commentCount: 0
                }))
                setPosts(normalizedPosts)
            }
        )()
    }, [])
    return (
        <FlatList
            data={posts.slice(0, 30)}
            showsVerticalScrollIndicator={false}
            keyExtractor={(post) => post.id.toString()}
            contentContainerStyle={[styles.containerStyle, { paddingBottom: insets.bottom * 0.4 }]}
            style={[styles.FlatlistStyle]}
            renderItem={({ item }) => (
                <Post post={item} />
            )} />
    )
}

export default React.memo(PostsSection)