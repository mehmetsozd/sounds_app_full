import axios from 'axios';
import { API_URL } from '../global';


export async function getCharacters(categoryId) {
 // kategori 1 derin devlet 2 mafya
 const confObj = {
  method: 'get',
  url: `${API_URL}/characters/${categoryId}`,
  headers: {
   Accept: 'application/json'
  },
 };
 try {
  const response = await axios(confObj);
  return response;
 } catch (error) {
  console.log(error);
 }
}

export async function getSounds(characterId) {
 const confObj = {
  method: 'get',
  url: `${API_URL}/sounds/${characterId}`,
  headers: {
   Accept: 'application/json'
  },
 };
 try {
  const response = await axios(confObj);
  return response;
 } catch (error) {
  console.log(error);
 }
}