import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { windowHeight, windowWidth } from '../global';
import { getSounds } from '../api/api';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useAudioHelper } from '../helper/audio-helper'
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome';

function SoundsScreen({ navigation, route }) {
  const { category_id, character_id, name } = route.params;
  const [loading, setLoading] = useState(true);
  const derinDevletPng = require('../assets/images/derin.png');
  const mafyaPng = require('../assets/images/mafya.png');
  const [data, setData] = useState([]);

  const player = [useAudioHelper({ name: 'Racon kesmiyorum kafa kesiyorum', sound_path: "http://192.168.2.186:8000/sounds/1acbe39f7ca0c17fd571645fcf7f2d7f.mp3" })];



  React.useEffect(() => {
    try {
      getSounds(character_id).then((res) => {
        if (res.status == 200) {
          setData(res.data);
        } else {
          console.log(res.status);
        }
      }).finally(() => {
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.soundContainer}>
      <View style={[styles.progressBar, { backgroundColor: category_id == 1 ? '#202444' : '#401818' }]}>
        <Text numberOfLines={1} style={styles.progressBarText}>"{item.currentAudioName}"</Text>
        <TouchableWithoutFeedback onPress={() => { console.log('paylaş') }}>
          <Icon name="share" size={20} color="white" style={{ right: 10, position: 'absolute', padding: 10 }} />
        </TouchableWithoutFeedback>
      </View>
      <View style={[styles.progressBar, { backgroundColor: category_id == 1 ? '#202444' : '#401818' }]}>
        <View style={styles.actionButtonsOther}>
          {
            item.status === 'play' ?
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={item.pause}
              >
                <FontAwesomeIcon
                  name='pause'
                  color='white'
                  size={20}
                />
              </TouchableOpacity> :
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={item.play}
              >
                <FontAwesomeIcon
                  name='play'
                  color='white'
                  size={20}
                />
              </TouchableOpacity>
          }
        </View>
        <Slider
          style={{ width: '70%', height: 40 }}
          minimumValue={0}
          maximumValue={item.duration}
          value={item.currentTime}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="gray"
          thumbTintColor='#FFFFFF'
          onTouchStart={item.pause}
          onTouchEnd={item.play}
          onSlidingComplete={(seconds) => item.seekToTime(seconds)}
        />
        <Text style={styles.progressBarText}>{item.durationString}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#000'} />
      <ImageBackground source={category_id == 1 ? derinDevletPng : mafyaPng} resizeMode="cover" style={styles.backgroundImage}>
        <View style={[styles.topRow, { backgroundColor: category_id == 1 ? '#202444' : '#401818' }]}>
          <TouchableWithoutFeedback onPress={() => {
            navigation.goBack();
          }
          }>
            <Icon name="arrow-left" size={20} color="white" style={{ left: 10, position: 'absolute', padding: 10 }} />
          </TouchableWithoutFeedback>
          <Text style={styles.title}>{name.toUpperCase()}</Text>
        </View>
        {loading ? <ActivityIndicator size="large" color="white" /> :
          <FlatList
            style={{ flex: 1, width: windowWidth * .9, alignSelf: 'center' }}
            data={player}
            renderItem={renderItem}
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
    flex: 1,
  },
  title: {
    color: 'white',
    fontFamily: "ArialBold",
    fontSize: 17,
    textAlign: 'center',
  },
  soundContainer: {
    marginTop: 15,
    flex: 1,
  },
  progressBar: {
    padding: 10,
    borderColor: 'white',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtonsOther: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  progressBarText: {
    color: 'white',
    fontFamily: "ArialBold",
    fontSize: 17,
    padding: 10
  },
  topRow: {
    height: windowHeight * .1,
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SoundsScreen;