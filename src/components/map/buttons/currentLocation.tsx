import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { getCurrentLocation } from "../../../utils/location";
import { LocationObject } from "expo-location";

// CurrentLocationButton.tsx
export interface CurrentLocationButtonProps {
  onData: (data: LocationObject) => void; // Callback function to send data to parent
}

const CurrentLocationButton: React.FC<CurrentLocationButtonProps> = ({
  onData,
}) => {
  const handlePress = async () => {
    // Simulate fetching current location data
    const currentLocationData = await getCurrentLocation();
    onData(currentLocationData); // Call the onData callback with the location data
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <MaterialIcons name="my-location" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#eeeeee",
    padding: 10,
    width: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default CurrentLocationButton;
