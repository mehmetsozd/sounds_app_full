import * as React from 'react';
import HoldingPage from './src/screens/HoldingScreen';
import SplashScreen from 'react-native-splash-screen'
import { Platform } from 'react-native';

const App = () => {
  React.useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  })
  return (
    <HoldingPage />

  );
};

export default App;
