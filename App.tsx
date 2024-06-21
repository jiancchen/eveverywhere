import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./src/navigators/RootNavigator";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
