import { StyleSheet } from 'react-native';
import HeaderSection from '../../components/HomeComponents/HeaderSection/HeaderSection';
import { VBox } from '../../components/GeneralComponents/BoxComponents';
import Divider from '../../components/GeneralComponents/Divider';
export const Home: React.FC = () => {
  return (
    <VBox style={[styles.container]}>
      <HeaderSection />
      <Divider width='100%' />
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
