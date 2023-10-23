import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { windowHeight, windowWidth } from '../global';

export default function MainScreen({ navigation }) {
 const backgroundImage = require('../assets/images/main.png');


 return (
  <SafeAreaView style={styles.container}>
   <StatusBar backgroundColor={'#000'} />
   <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
    <View style={styles.centeredContainer}>
     <View style={{ height: windowHeight * .2, alignItems: 'center', justifyContent: 'center' }}>
      <Text testID='mainTitle' style={styles.title}>Kurtlar Vadisi{'\n'}Raconlar</Text>
     </View>
     <TouchableWithoutFeedback testID='derinDevletButton' onPress={() => {
      navigation.navigate('CharactersScreen', {
       id: 1
      })
     }}>
      <ImageBackground source={require('../assets/images/button2.png')} resizeMode="stretch" style={styles.button}>
       <Text onPress={() => {
        navigation.navigate('CharactersScreen', {
         id: 1
        })
       }} style={styles.buttonText}>DERİN{'\n'} DEVLET</Text>
      </ImageBackground>
     </TouchableWithoutFeedback>
     <TouchableWithoutFeedback testID='mafyaButton' onPress={() => {
      navigation.navigate('CharactersScreen', {
       id: 2
      })
     }}>
      <ImageBackground source={require('../assets/images/button1.png')} resizeMode="stretch" style={styles.button}>
       <Text onPress={() => {
        navigation.navigate('CharactersScreen', {
         id: 2
        })
       }} style={styles.buttonText}>MAFYA</Text>
      </ImageBackground>
     </TouchableWithoutFeedback>
    </View>
   </ImageBackground>
  </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'black',
 },
 backgroundImage: {
  backgroundColor: 'black',
  flex: 1,
 },
 centeredContainer: {
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'space-around',
  alignItems: 'center'
 },
 title: {
  color: 'white',
  fontFamily: "Ringbearer",
  fontSize: 36,
  textAlign: 'center',
 },
 button: {
  height: windowHeight * .3,
  marginBottom: windowHeight * .05,
  borderRadius: 10,
  width: windowWidth * .8,
  borderColor: 'white',
  borderWidth: 1,
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
 },
 buttonText: {
  textAlign: 'center',
  fontFamily: 'ArialBold',
  fontSize: 64,
  color: 'rgba(255,255,255,0.2)',

 }

});
