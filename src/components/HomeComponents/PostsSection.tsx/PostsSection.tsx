import { FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IPost } from '../../../models/Post'
import Post from '../Post/Post'
import { getPosts } from '../../../services/PostService'

const PostsSection: React.FC = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        (
            async () => {
                setPosts(await getPosts())
            }
        )()
    }, [])
    return (
        <FlatList data={posts} keyExtractor={(post) => post.id.toString()} renderItem={({ item }) => (
            <Post post={item} />
        )} />
    )
}

export default PostsSection