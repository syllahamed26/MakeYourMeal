import { StyleSheet } from 'react-native';
import RegisterScreen from "./app/screens/Account/RegisterScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./app/screens/Account/LoginScreen";
import MyTabs from "./app/components/BottomTabBar";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Home" component={MyTabs}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}
