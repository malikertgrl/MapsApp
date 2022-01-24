// In App.js in a new project

import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import TabNavigator from "./TabNavigator"
import { useSelector } from 'react-redux';



const RootNavigation = () => {
    const Stack = createStackNavigator()
    const { isDarkMode } = useSelector(state => state.SystemReducer)

    useEffect(() => {
        console.log("isDarkMode", isDarkMode);
    }, [])
    return (
        <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme} >
            <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="TabNavigator" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation