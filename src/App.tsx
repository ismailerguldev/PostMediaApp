import { createURL } from 'expo-linking';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { Navigation } from './navigation';
import { theme } from './config/constants';
import { Provider } from 'react-redux';
import { store } from './redux/store';

SplashScreen.preventAutoHideAsync();

const prefix = createURL('/');

export const App: React.FC = () => {
  //const colorScheme = useColorScheme();
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
