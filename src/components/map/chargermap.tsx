import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Button, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

const Map = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = useRef(null); // Step 2: Add MapView ref

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  const getCurrentLocation = async () => { // Step 3
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
    mapRef?.current.animateToRegion({ // Use the ref to change the region
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }, 1000); // 1000 ms animation duration
  };

  if (!location) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      {/* Your existing code for buttons */}
      <Button title="Current Location" onPress={getCurrentLocation}/>

      <MapView
        style={styles.map}
        ref={mapRef} // Assign the ref to your MapView
        mapType="mutedStandard"
        showsPointsOfInterest={false}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      {/* Your existing ScrollView and items */}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: "100%",
      height: "100%",
    },
    scrollView: {
      position: "absolute",
      bottom: 20,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    item: {
      backgroundColor: "white",
      borderRadius: 5,
      padding: 20,
      marginLeft: 10,
      marginRight: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    title_text: {
      fontSize: 40,
      fontWeight: "900",
      marginBottom: 55,
    },
    counter_text: {
      fontSize: 35,
      fontWeight: "900",
      margin: 15,
    },
    btn: {
      backgroundColor: "#086972",
      padding: 10,
      margin: 10,
      borderRadius: 10,
    },
    btn_text: {
      fontSize: 23,
      color: "#fff",
    },
  });
  

// Your existing styles object

export default Map;