// src/services/geolocation.js
import * as Location from 'expo-location'; // Assuming Expo for geolocation

export const getCurrentLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.error('Permission to access location was denied');
    return null;
  }

  let location = await Location.getCurrentPositionAsync({});
  return {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };
};
