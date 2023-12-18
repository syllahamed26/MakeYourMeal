import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet} from "react-native";

import defaultStyles from "../config/styles";
import WelcomeScreen from "../screens/Tab/WelcomeScreen";
import AccountScreen from "../screens/Account/AccountScreen";
import RecipeScreen from "../screens/RecipeScreen";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import FavoriteScreen from "../screens/FavoriteScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator style={styles.tab}>
            <Tab.Screen name="Welcome" component={WelcomeScreen} options={
                {
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-circle" color={color} size={35} />
                    ),
                    headerTitle: 'Home',
                }
            }/>
            <Tab.Screen name="Meal" component={RecipeScreen} options={
                {
                    tabBarLabel: 'Recipe',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="food" color={color} size={35} />
                    ),
                    headerTitle: 'What\'s my meal today ?',
                }
            }/>
            <Tab.Screen name="Account" component={AccountScreen} options={
                {
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color}) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={35} />
                    ),
                    headerTitle: 'My Profile',
                }
            }/>
            <Tab.Screen name={"Favorite"} component={FavoriteScreen} options={
                {
                    tabBarButton: () => null,
                    headerTitle: 'My Favorites Recipes',
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