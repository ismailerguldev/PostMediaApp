import { StyleSheet } from 'react-native';
import HeaderSection from '../../components/HomeComponents/HeaderSection/HeaderSection';
import { VBox } from '../../components/GeneralComponents/BoxComponents';
import Divider from '../../components/GeneralComponents/Divider';
import PostsSection from '../../components/HomeComponents/PostsSection.tsx/PostsSection';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export const Home: React.FC = () => {
  const insets = useSafeAreaInsets()
  return (
    <VBox style={[styles.container]}>
      <HeaderSection />
      <PostsSection />
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
