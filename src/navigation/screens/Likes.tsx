import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { VBox } from '../../components/GeneralComponents/BoxComponents'
import HeaderSection from '../../components/HomeComponents/HeaderSection/HeaderSection'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { IPost } from '../../models/Post'
import Post from '../../components/HomeComponents/PostsSection.tsx/Post/Post'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Icons } from '../../assets/icons/icons'
import { useTheme } from '@react-navigation/native'
import { getLikeds } from '../../services/PostCacheService'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Likes: React.FC = () => {
    const likedPosts: IPost[] = useAppSelector((state) => state.user.liked)
    const insets = useSafeAreaInsets()
    const { colors } = useTheme()
    const dispatch = useAppDispatch()
    useEffect(() => {
        (async () => { await dispatch(getLikeds()); })()
    }, [])
    return (
        <VBox style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 16, }}>
            {
                likedPosts.length > 0 ? (
                    <FlatList
                        data={likedPosts}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(post) => post.id.toString()}
                        contentContainerStyle={{ paddingBottom: insets.bottom * 0.4, gap: 16, }}
                        style={{ padding: 8, marginTop: 16, width: "100%" }}
                        renderItem={({ item }) => (
                            <Post post={item} />
                        )} />
                ) :
                    (
                        <VBox style={{ justifyContent: "center", alignItems: "center", gap: 16 }}>
                            <Icons.Sad color={colors.text} style={{ opacity: 0.5 }} size={48} />
                            <Text style={{ fontSize: 16, color: colors.text, opacity: 0.5 }}>There is no liked posts here...</Text>
                        </VBox>

                    )
            }



        </VBox>
    )
}

export default Likes