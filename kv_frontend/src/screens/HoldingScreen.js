import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import MainScreen from './MainScreen';
import CharactersScreen from './CharactersScreen';
import SoundsScreen from './SoundsScreen';
const MainFeedStack = createNativeStackNavigator();

function MainFeedScreen() {
 return (
  <MainFeedStack.Navigator initialRouteName="MainScreen" screenOptions={{ headerShown: false, unmountOnBlur: true }} >
   <MainFeedStack.Screen name="MainScreen" component={MainScreen} />
   <MainFeedStack.Screen name="CharactersScreen" component={CharactersScreen} />
   <MainFeedStack.Screen name="SoundsScreen" component={SoundsScreen} />
  </MainFeedStack.Navigator>
 );
}


function HoldingPage({ }) {

 return (
  <NavigationContainer>
   <MainFeedScreen />
  </NavigationContainer>
 );
}

export default HoldingPage;
