import RegisterScreen from "./app/screens/Account/RegisterScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./app/screens/Account/LoginScreen";
import MyTabs from "./app/components/BottomTabBar";
import {useEffect, useState} from "react";
import ForgotPasswordScreen from "./app/screens/Account/ForgotPasswordScreen";
import {getUser} from "./app/storage/UserStorage";

const Stack = createNativeStackNavigator();
export default function App() {
    const [initialRouteName, setInitialRouteName] = useState(null);
    useEffect(() => {
        const checkUser = async () => {
            const user = await getUser();
            if (user) {
                setInitialRouteName('Home');
            }else {
                setInitialRouteName('Login');
            }
        }
        checkUser();
    }, []);

    return initialRouteName ? (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
            <Stack.Screen name="Home" component={MyTabs}/>
        </Stack.Navigator>
      </NavigationContainer>
    ) : null;
}
