import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "../screens/Map";
import AccountScreen from "../screens/account/Account";
import PlansScreen from "../screens/plans/Plans";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const RootNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconColor = focused ? "purple" : color; // Change color to purple when focused
            if (route.name === "Map") {
              iconName = focused ? "map" : "map"; // Choose the icon based on focus
              return (
                <MaterialIcons name={iconName} size={size} color={iconColor} />
              );
            } else if (route.name === "Account") {
              iconName = focused ? "person" : "person";
              return (
                <MaterialIcons name={iconName} size={size} color={iconColor} />
              );
            } else if (route.name === "Plans") {
              iconName = focused ? "shop" : "shop"; // Choose the icon based on focus
              return (
                <MaterialIcons name={iconName} size={size} color={iconColor} />
              );
            }
            // You can return any component that you like here!
          },
          tabBarLabelStyle: {
            fontWeight: "bold", // Make the text bold
          },
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerShown: false, // This line ensures the header is not shown

        })}
        tabBarOptions={{
          activeTintColor: "purple", // Set the active (focused) text color to purple
          inactiveTintColor: "gray", // Set the inactive text color to gray
        }}
      >
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{
            title: "Map",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Button
                title="Press me"
                color="#fff"
                onPress={() => alert("This is a button!")}
              ></Button>
            ),
          }}
        />
        <Stack.Screen name="Plans" component={PlansScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
