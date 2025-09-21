import { createURL } from 'expo-linking';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { Navigation } from './navigation';
import { theme } from './config/constants';

SplashScreen.preventAutoHideAsync();

const prefix = createURL('/');

export const App: React.FC = () => {
  //const colorScheme = useColorScheme();
  return (
    <Navigation
      theme={theme}
      linking={{
        enabled: 'auto',
        prefixes: [prefix],
      }}
      onReady={() => {
        SplashScreen.hideAsync();
      }}
    />
  );
}
