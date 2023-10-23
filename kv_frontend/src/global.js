import { Dimensions } from 'react-native';

const isDemo = true;
export const API_URL = isDemo ? 'http://192.168.1.43:8000/api' : 'https://pet.proximaanalitik.com/api';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;