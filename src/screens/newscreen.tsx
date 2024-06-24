import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const ListScreen = () => {
  // State to hold the fetched data
  const [data, setData] = useState([]);
  const navigation = useNavigation(); // Hook to access navigation object

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8888/api/stock/stocktickers"
        );
        setData(response.data); // Assuming the API returns an array
      } catch (error) {
        console.error("Error fetching data: ", error);
        // Handle error or set default data
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  const renderItem = ({ item }) => {

    const handlePress = () => {
        // Navigate to a different screen, replace 'DetailScreen' with your screen name
        // Pass item as a parameter if needed
        navigation.navigate('JustStock');
    };
    
    return (
    <TouchableOpacity onPress={handlePress}>
    <View style={styles.itemContainer}>
      <Text style={styles.symbolText}>{item.symbol}</Text>
      <Text style={styles.nameText}>{item.name}</Text>
      <Image
        source={{ uri: "https://i.pinimg.com/originals/fe/8e/1d/fe8e1dea7e974d47e17d6c68e50e4b39.png" }} // Assuming the API returns a URL
        style={{ width: 50, height: 50 }}/>
    </View>
    </TouchableOpacity>);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} // Adjust according to your data structure
      />
    </GestureHandlerRootView>
  );
};

// Define your styles outside of the component
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#f9f9f9", // Light grey background
    padding: 10, // Add some padding around the text
    borderBottomWidth: 1, // Add a bottom border to each item
    borderBottomColor: "#ddd", // Light grey border
    flexDirection: "column", // Align items in a row
    justifyContent: "space-between", // Space between the symbol and name
  },
  symbolText: {
    fontWeight: "bold", // Make the symbol text bold
    color: "#333", // Dark grey color for better readability
  },
  nameText: {
    color: "#555", // Slightly lighter grey for the name
  },
});

export default ListScreen;
