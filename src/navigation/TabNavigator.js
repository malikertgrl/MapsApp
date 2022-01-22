import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home"
import Profile from "../screens/Profile"
import Icon from "../components/Icon"
import { Colors } from "../constants"
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    const { isDarkMode } = useSelector(state => state.SystemReducer)
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
            tabBarActiveTintColor: isDarkMode ? "red" : Colors.backGroundColor
        }} >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" color={color} size={size} />

                )


            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="user-alt" color={color} size={size} />

                )


            }} />
        </Tab.Navigator >
    );
}