import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from "./app/screens/Account/RegisterScreen";
import {NavigationContainer} from "@react-navigation/native";
import MyTabs from "./app/components/BottonTabBar";

export default function App() {
  return (
      <NavigationContainer>
          <MyTabs/>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
