import React from 'react';
import AppNav from './core/navigation/AppNav';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

function App(): JSX.Element {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme} >
      {<AppNav />}
    </NavigationContainer>
  );
}

export default App;