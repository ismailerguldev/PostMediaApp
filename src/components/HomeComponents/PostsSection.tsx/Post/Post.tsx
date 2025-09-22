import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IPost } from '../../../../models/Post'
import { HBox, VBox } from '../../../GeneralComponents/BoxComponents'
import { useTheme } from '@react-navigation/native'
import { styles } from './styles'
import Divider from '../../../GeneralComponents/Divider'
import { Icons } from '../../../../assets/icons/icons'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../../redux/hooks'
import { setLikeds } from '../../../../redux/slices/userSlice'

const Post = ({ post }: { post: IPost }): React.JSX.Element => {
    const { colors }: ReactNavigation.Theme = useTheme()
    const likedPosts: IPost[] = useAppSelector((state) => state.user.liked)
    const [isLiked, setIsLiked] = useState<boolean>(likedPosts.some(p => p.id === post.id))
    const [likeCount, setLikeCount] = useState<number>(post.likeCount ?? 0)
    const commentCount: number = post.commentCount!
    const dispatch = useDispatch()
    const handleLike = () => {
        if (isLiked) {
            setLikeCount(prev => prev - 1)
            setIsLiked(false)
            const updatedPosts: IPost[] = likedPosts.filter(p => p.id !== post.id)
            dispatch(setLikeds(updatedPosts))
        } else {
            const updatedPosts: IPost[] = [{ ...post, likeCount: likeCount + 1 }, ...likedPosts]
            dispatch(setLikeds(updatedPosts))
            setLikeCount(prev => prev + 1)
            setIsLiked(true)
        }
    }
    useEffect(() => {
        const likedPost = likedPosts.find(p => p.id === post.id)
        if (likedPost) {
            setIsLiked(true)
            setLikeCount(likedPost.likeCount ?? 0)
        } else {
            setIsLiked(false)
            setLikeCount(post.likeCount ?? 0)
        }
    }, [likedPosts])
    return (
        <VBox style={[styles.container, { backgroundColor: colors.card }]}>
            <HBox style={[styles.titleSection]}>
                <Image source={{ uri: "https://picsum.photos/1000" }} style={styles.profileImage} />
                <VBox>
                    <Text style={[styles.username, { color: colors.text }]}>Username</Text>
                    <Text style={[{ color: colors.text }, styles.title]}>{post.title.slice(0, 30)}</Text>
                </VBox>
            </HBox>
            <Divider width='100%' style={{ marginTop: 8 }} />
            <Text style={[{ color: colors.text }]}>{post.body}</Text>
            <HBox style={[{ gap: 16, marginLeft: 16, marginTop: 8 }]}>
                <TouchableOpacity onPress={handleLike}>
                    <HBox style={[styles.actionIcons, { borderColor: colors.border, }]}>
                        <Icons.Like color={isLiked ? "red" : colors.text} size={24} />
                        <Text style={{ color: colors.text, fontSize: 16, fontWeight: "bold" }}>{likeCount}</Text>
                    </HBox>
                </TouchableOpacity>
                <TouchableOpacity>
                    <HBox style={[styles.actionIcons, { borderColor: colors.border, }]}>
                        <Icons.Comment color={colors.text} size={24} />
                        <Text style={{ color: colors.text, fontSize: 16, fontWeight: "bold" }}>{commentCount}</Text>
                    </HBox>
                </TouchableOpacity>
            </HBox>
        </VBox>
    )
}

export default React.memo(Post)