import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegisterScreen from "../screens/Account/RegisterScreen";
import LoginScreen from "../screens/Account/LoginScreen";
import {StyleSheet} from "react-native";

import defaultStyles from "../config/styles";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator style={styles.tab}>
            <Tab.Screen name="Home" component={RegisterScreen}/>
            <Tab.Screen name="Settings" component={LoginScreen}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tab: {
        backgroundColor: defaultStyles.colors.gray,
    }
});

export default MyTabs;