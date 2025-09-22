import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import { VBox } from '../../components/GeneralComponents/BoxComponents';
import PostsSection from '../../components/HomeComponents/PostsSection.tsx/PostsSection';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import { getLikeds } from '../../services/PostCacheService';
import { getPosts } from '../../services/PostService';
import { Icons } from '../../assets/icons/icons';
import { useTheme } from '@react-navigation/native';
export const Home: React.FC = () => {
  const isLoading = useAppSelector((state) => state.user.isFetchingPosts)
  const { colors } = useTheme()
  const dispatch = useAppDispatch()
  useEffect(() => {
    (async () => { await dispatch(getLikeds()); })()
    dispatch(getPosts())
  }, [])
  return (
    <VBox style={[styles.container]}>
      {
        isLoading === "fulfilled" ?
          <PostsSection />
          : isLoading === "pending" ? <ActivityIndicator size={"large"} color={"black"} /> : <VBox style={{ justifyContent: "center", alignItems: "center", gap: 16 }}>
            <Icons.Sad color={colors.text} style={{ opacity: 0.5 }} size={48} />
            <Text style={{ fontSize: 16, color: colors.text, opacity: 0.5 }}>There is no posts here...</Text>
          </VBox>
      }
    </VBox>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
