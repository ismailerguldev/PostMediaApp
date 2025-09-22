import { Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';
import { useAppSelector } from '../../redux/hooks';
import Post from '../../components/HomeComponents/PostsSection.tsx/Post/Post';

export function Updates() {
  const liked = useAppSelector((state) => state.user.liked)
  return (
    <View style={styles.container}>
      {
        liked.map((post) => (
          <Post post={post} key={post.id} />
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
