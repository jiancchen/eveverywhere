// In a Navigation.js or similar file
import { createStackNavigator } from '@react-navigation/stack';
import newscreen from '../screens/newscreen';
import JustStock from '../screens/juststock';

const Stack = createStackNavigator();

const ViewStockStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="stocks" component={newscreen} />
    <Stack.Screen name="JustStock" component={JustStock} />
  </Stack.Navigator>
);

export default ViewStockStack;