import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
  TextInput
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy, decrementBy, incrementAsync, decrementAsync } from "../redux/reducers/countReducer";
import { AppDispatch, RootState, store } from "../redux/store";
import { getLocationPermission } from "../components/permissions/ExpoPermission";
import Map from "../components/map/chargermap";

const MapScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const count = useSelector((state : RootState) => state.counter.count);

  const handleIncrement = () => {
    dispatch(incrementAsync(4));
  };

  const handleDecrement = () => {
    dispatch(decrementBy(10));
  };


    //   {/* <View style={styles.container}>
    //     <Text style={styles.title_text}>Counter App</Text>
    //     <Text style={styles.counter_text}>{count}</Text>

    //     <TouchableOpacity onPress={handleIncrement} style={styles.btn}>
    //       <Text style={styles.btn_text}> Increment </Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity
    //       onPress={handleDecrement}
    //       style={{ ...styles.btn, backgroundColor: "#6e3b3b" }}
    //     >
    //       <Text style={styles.btn_text}> Decrement </Text>
    //     </TouchableOpacity>
    //   </View> */}

  return (
    
    <View style={styles.container}>

      <Button title = "Request Permission" onPress={ () => getLocationPermission()}/>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search here..."
          style={styles.searchBar}
        />
      </View>
      <Map
      />
      <ScrollView
        style={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {[...Array(10).keys()].map((i) => (
          <View key={i} style={styles.item}>
            <Text>Item {i + 1}</Text>
          </View>
        ))}
      </ScrollView>
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
  searchBarContainer: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    top: 10, // Adjust top as needed
    paddingHorizontal: 20, // Side padding
  },
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    fontSize: 15,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default MapScreen;
