import * as Location from 'expo-location';

export async function getLocationPermission() {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission to access location was denied');
    return;
  }

  alert('Permission to access location was granted');

  // You now have permission
  // Proceed with accessing the location
}