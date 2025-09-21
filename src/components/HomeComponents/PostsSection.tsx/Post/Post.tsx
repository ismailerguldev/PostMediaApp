import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IPost } from '../../../../models/Post'
import { HBox, VBox } from '../../../GeneralComponents/BoxComponents'
import { useTheme } from '@react-navigation/native'
import { styles } from './styles'
import Divider from '../../../GeneralComponents/Divider'
import { Icons } from '../../../../assets/icons/icons'
import { useDispatch } from 'react-redux'
import { setLikeds } from '../../../../redux/slices/userSlice'
import { useAppSelector } from '../../../../redux/hooks'

const Post = ({ post }: { post: IPost }): React.JSX.Element => {
    const { colors }: ReactNavigation.Theme = useTheme()
    const [like, setLike] = useState<number>(Math.floor(Math.random() * 11))
    const [comment, setComment] = useState<number>(Math.floor(Math.random() * 11))
    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [likedPosts, setLikedPosts] = useState<IPost[]>([])
    const dispatch = useDispatch()
    const handleLike = (): void => {
        if (isLiked) {
            const updatedPosts: IPost[] = likedPosts.filter(p => p.id !== post.id)
            setLikedPosts(updatedPosts)
            dispatch(setLikeds(updatedPosts))
            setLike(prev => prev - 1)
            setIsLiked(false)
        } else {
            const updatedPosts: IPost[] = [post, ...likedPosts]
            setLikedPosts(updatedPosts)
            dispatch(setLikeds(updatedPosts))
            setLike(prev => prev + 1)
            setIsLiked(true)
        }
    }
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
                        <Text style={{ color: colors.text, fontSize: 16, fontWeight: "bold" }}>{like}</Text>
                    </HBox>
                </TouchableOpacity>
                <TouchableOpacity>
                    <HBox style={[styles.actionIcons, { borderColor: colors.border, }]}>
                        <Icons.Comment color={colors.text} size={24} />
                        <Text style={{ color: colors.text, fontSize: 16, fontWeight: "bold" }}>{comment}</Text>
                    </HBox>
                </TouchableOpacity>
            </HBox>
        </VBox>
    )
}

export default React.memo(Post)