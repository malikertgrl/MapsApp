import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home"
import Profile from "../screens/Profile"
import Task from "../screens/tasks"
import Icon from "../components/Icon"
import { Colors } from "../constants"
import { useSelector } from "react-redux";
import I18n from "../i18n"

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    const { isDarkMode } = useSelector(state => state.SystemReducer)
    return (
        <Tab.Navigator initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: isDarkMode ? "red" : Colors.backGroundColor,
                headerTitleAlign: "center"
            }} >
            <Tab.Screen name="Home" component={Home} options={{
                title: I18n.t("home"),
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" color={color} size={size} />
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                title: I18n.t("profile"),
                tabBarIcon: ({ color, size }) => (
                    <Icon name="user-alt" color={color} size={size} />
                )
            }} />

            <Tab.Screen name="Task" component={Task} options={{
                title: I18n.t("task"),
                tabBarIcon: ({ color, size }) => (
                    <Icon name="tasks" color={color} size={size} />
                )
            }} />
        </Tab.Navigator >
    );
}