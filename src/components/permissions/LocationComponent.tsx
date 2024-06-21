import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const LocationComponent = () => {
  useEffect(() => {
    checkLocationPermission();
  }, []);

  const checkLocationPermission = async () => {
    const result = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    if (result === RESULTS.DENIED) {
      const requestResult = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      console.log(requestResult);
    }
  };

  return (
    <View>
      <Text>Location Permission Example</Text>
      <Button title="Check Location Permission" onPress={checkLocationPermission} />
    </View>
  );
};

export default LocationComponent;