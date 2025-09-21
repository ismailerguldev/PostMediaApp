import { StyleSheet, View } from 'react-native';
import { getPosts } from '../../services/PostService';
import { useState } from 'react';
import { IPost } from '../../models/Post';
export function Home() {
  const [posts, setPosts] = useState<IPost[]>([])
  return (
    <View style={styles.container}>
      
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
