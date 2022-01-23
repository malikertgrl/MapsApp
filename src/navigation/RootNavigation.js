// In App.js in a new project

import React from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import TabNavigator from "./TabNavigator"
import { useSelector } from 'react-redux';

const Stack = createStackNavigator()


function RootNavigation() {
    const { isDarkmode } = useSelector(state => state.SystemReducer)

    return (
        <NavigationContainer theme={isDarkmode ? DarkTheme : DefaultTheme} >
            <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="TabNavigator" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;