import { FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IPost } from '../../../models/Post'
import { getPosts } from '../../../services/PostService'
import { styles } from './styles'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'
import Post from './Post/Post'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { getLikeds } from '../../../services/PostCacheService'

const PostsSection: React.FC = () => {
    const posts = useAppSelector((state) => state.user.allPosts)
    const insets: EdgeInsets = useSafeAreaInsets()
    const dispatch = useAppDispatch()
    useEffect(() => {
        (async () => { await dispatch(getLikeds()); })()
        dispatch(getPosts())
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