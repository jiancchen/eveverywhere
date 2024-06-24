import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ChargerItem } from "../../api/charger";
import { useDispatch } from "react-redux";
import { setCharger } from "../../redux/slice/charger";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Charger({ charger }: { charger: ChargerItem }) {
  const dispatch = useDispatch();

  function handlePress() {
    console.log("Charger pressed");
    dispatch(setCharger(charger));
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.item}>
        <Text style={styles.text}> {charger.company}</Text>
        <Text style={styles.text}>{charger.name}</Text>
        <View style={styles.container}>
          <Text style={styles.text}>
            <MaterialIcons name="electric-car" size={20} /> {charger.inUse} /{" "}
            {charger.available} available
          </Text>
          <Text style={styles.text}>
            <MaterialIcons name="attach-money" size={20} /> {charger.costPerKWH}
          </Text>
        </View>
        <Text style={styles.text}>
          Speed
          {Array.from({ length: charger.chargeSpeed }, (_, index) => (
            <MaterialIcons key={index} name="battery-charging-full" size={15} />
          ))}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Align children side by side
    alignItems: "center", // Align items vertically in the center
    justifyContent: "space-between", // Distribute extra space evenly
  },
  text: {
    fontSize: 12, // Make text smaller
    flexDirection: "row", // Ensure icon and text are in a row
    alignItems: "center", // Align icon and text vertically in the center
  },
  item: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    width: 250,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "flex-start", // Align items to the left
    justifyContent: "center",
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2, // Adds a little space between text lines
  },
});
