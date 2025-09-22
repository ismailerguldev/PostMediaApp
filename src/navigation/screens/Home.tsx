import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import { VBox } from '../../components/GeneralComponents/BoxComponents';
import PostsSection from '../../components/HomeComponents/PostsSection.tsx/PostsSection';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import { getLikeds } from '../../services/PostCacheService';
import { getPosts } from '../../services/PostService';
export const Home: React.FC = () => {
  const isLoading = useAppSelector((state) => state.user.isFetchingPosts)
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
          : isLoading === "pending" ? <ActivityIndicator size={"large"} color={"black"} /> : <Text>hi</Text>
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
