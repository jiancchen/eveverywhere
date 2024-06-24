import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState, store } from "../redux/store";
import Map from "../components/map/chargermap";
import CurrentLocationButton from "../components/map/buttons/currentLocation";
import { LocationObject } from "expo-location";
import { fetchChargers } from "../api/charger";
import { ChargerItem } from "../api/charger";
import Charger from "../components/map/charger";



const MapScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [location, setLocation] = useState(null); // Initialize state to hold location data
  const [chargers, setChargers] = useState([] as ChargerItem[]); // Initialize state to hold charger data

  const count = useSelector((state: RootState) => state.counter.count);
  const selectedCharger = useSelector((state: RootState) => state.charger.chargeItem);

  const scrollViewRef = useRef(null);

// Function to create a new location object
function createLocationObject(latitude: number, longitude: number) {
    return {
      coords: {
        latitude: latitude,
        longitude: longitude,
      },
      // You can add other properties as needed, following the structure expected by Expo Location
    };
  }

  // Use useEffect to react to changes in selectedCharger
  useEffect(() => {
    // This code runs when selectedCharger changes
   setLocation(createLocationObject(selectedCharger.lat, selectedCharger.lng));
    // You can place any logic here to react to the change
  }, [selectedCharger]); 


  const handleLocationData = (locationData: LocationObject) => {
    console.log(locationData); // Handle the received location data (e.g., display it or save it)
    // For example, you might set this data to the state or perform some action with it
    setLocation(locationData);
  };

  const handleFetchChargers = async () => {
    const chargerData = await fetchChargers();
    setChargers(chargerData);
    Alert.alert("Chargers fetched", `Found ${chargerData.length} chargers`);
  };

  useEffect(() => {
    handleFetchChargers();
  }, []);

  return (
    <View style={styles.container}>
      <Map newLocation={location} onSetMarkers={chargers}/>
      <View style={styles.overlay}>
        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Search here..."
            style={styles.searchBar}
            pointerEvents="auto" // Explicitly set to auto if inheriting none from overlay
          />
        </View>
      </View>
      <View style={styles.scrollView}>
        <CurrentLocationButton onData={handleLocationData} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        >
          {chargers.map((charger) => (
            <Charger key={charger.id} charger={charger}/>
          ))}
        </ScrollView>
      </View>
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
  overlay: {
    position: "absolute",
    bottom: 0,
    top: 100,
    left: 0,
    right: 0,
    height: 50,
    paddingVertical: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    paddingVertical: 10,
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
  searchBarContainer: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    top: 10, // Adjust top as needed
    paddingHorizontal: 20, // Side padding
  },
  searchBar: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    fontSize: 15,
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    pointerEvents: "auto", // Add this line
  },
  button: {
    position: "absolute",
    bottom: 20, // Adjust the position as needed
    left: "50%",
    marginLeft: -50, // Adjust based on the button's width to center it
  },
});

export default MapScreen;
