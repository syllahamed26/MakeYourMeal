import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from "./app/screens/Account/RegisterScreen";

export default function App() {
  return (
          <RegisterScreen/>
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
