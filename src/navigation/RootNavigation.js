// In App.js in a new project

import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import TabNavigator from "./TabNavigator"
import { useSelector } from 'react-redux';




const RootNavigation = () => {
    const Stack = createStackNavigator()
    const { isDarkMode, userInfo } = useSelector(state => state.SystemReducer)

    useEffect(() => {
        console.log("userInfo", userInfo);
    }, [])


    return (
        <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme} >
            <Stack.Navigator initialRouteName="LoginScreen" //{userInfo != null ? "TabNavigator" : "LoginScreen"}
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="TabNavigator" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation