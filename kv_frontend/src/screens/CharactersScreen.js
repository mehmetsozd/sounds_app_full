import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableWithoutFeedback, ActivityIndicator, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { windowHeight, windowWidth } from '../global';
import { getCharacters } from '../api/api';
import Icon from 'react-native-vector-icons/FontAwesome';

function CharactersScreen({ navigation, route }) {
 const { id } = route.params;
 const [loading, setLoading] = useState(true);
 const [data, setData] = useState([]);
 const derinDevletPng = require('../assets/images/derin.png');
 const mafyaPng = require('../assets/images/mafya.png');

 useEffect(() => {
  getCharacters(id).then((res) => {
   if (res.status == 200) {
    setData(res.data);
    setLoading(false);
   } else {
    console.log(res)
   }
  });
 }, []);



 return (
  <SafeAreaView style={styles.container}>
   <StatusBar backgroundColor={'#000'} />
   <ImageBackground source={id == 1 ? derinDevletPng : mafyaPng} resizeMode="cover" style={styles.backgroundImage}>
    <View style={[styles.topRow, { backgroundColor: id == 1 ? '#202444' : '#401818' }]}>
     <TouchableWithoutFeedback onPress={() => {
      navigation.goBack();
     }
     }>
      <Icon name="arrow-left" size={20} color="white" style={{ left: 10, position: 'absolute', padding: 10 }} />
     </TouchableWithoutFeedback>
     <Text style={styles.title}>{id == 1 ? 'DERİN DEVLET' : 'MAFYA'} ÜYELERİ</Text>
    </View>
    {loading ? <ActivityIndicator size="large" color="white" /> :
     <FlatList
      style={{ flex: 1, width: windowWidth * .9, alignSelf: 'center' }}
      data={data}
      renderItem={({ item }) => (
       <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('SoundsScreen', {
         category_id: id,
         character_id: item.id,
         name: item.name
        });
       }}>
        <View style={[styles.button, { backgroundColor: id == 1 ? '#202444' : '#401818' }]}>
         <Image source={{ uri: item.picture }} style={{ width: 50, height: 50, marginLeft: 20, marginRight: 20 }} />
         <Text style={styles.buttonText}>{item.name.toUpperCase()}</Text>
        </View>
       </TouchableWithoutFeedback>
      )}
     />
    }
   </ImageBackground>
  </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#0000009a',
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
  fontFamily: "ArialBold",
  fontSize: 17,
  textAlign: 'center',
 },
 button: {
  flex: 1,
  height: windowHeight * .1,
  marginTop: 10,
  alignItems: 'center',
  flexDirection: 'row',
 },
 buttonText: {
  color: 'white',
  fontFamily: "ArialBold",
  fontSize: 15,
  textAlign: 'center',
  padding: 10,
 },
 topRow: {
  height: windowHeight * .1,
  width: windowWidth,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
 },

});

export default CharactersScreen;