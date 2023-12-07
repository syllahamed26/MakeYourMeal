import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet} from "react-native";

import defaultStyles from "../config/styles";
import WelcomeScreen from "../screens/Tab/WelcomeScreen";
import AccountScreen from "../screens/Account/AccountScreen";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator style={styles.tab}>
            <Tab.Screen name="Welcome" component={WelcomeScreen} options={
                {
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home-circle" color={color} size={35} />
                    ),
                    headerTitle: 'Home',
                }
            }/>
            <Tab.Screen name="Account" component={AccountScreen} options={
                {
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={35} />
                    ),
                    headerTitle: 'My Profile',
                }
            }/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tab: {
        backgroundColor: defaultStyles.colors.gray,
    }
});

export default MyTabs;