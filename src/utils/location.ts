import * as Location from 'expo-location';

export async function getCurrentLocation() : Promise<Location.LocationObject> { // Step 3
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return <Location.LocationObject>{};
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    return currentLocation;
};