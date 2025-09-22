import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import bell from '../assets/bell.png';
import newspaper from '../assets/newspaper.png';
import { Home } from './screens/Home';
import Likes from './screens/Likes';
import HeaderSection from '../components/HomeComponents/HeaderSection/HeaderSection';
import { Icons } from '../assets/icons/icons';
const HomeTabs = createBottomTabNavigator({
  screenOptions: {
    header(props) {
      return (
        <HeaderSection route={props.route.name} />
      )
    },
    tabBarStyle: {
      borderTopWidth: 0,
    },
    tabBarLabelStyle: { fontSize: 16, }
  },
  screens: {
    Home: {
      screen: Home,
      options: {
        title: 'Feed',
        tabBarIcon: ({ color, size }) => (
          <Icons.Home color={color} size={size} />
        ),
      },
    },
    Likes: {
      screen: Likes,
      options: {
        tabBarIcon: ({ color, size, focused }) => focused ? <Icons.FLike color={color} size={size} /> : <Icons.Like color={color} size={size} />,
        tabBarInactiveTintColor: "#cacaca",
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: 'Home',
        headerShown: false,
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
