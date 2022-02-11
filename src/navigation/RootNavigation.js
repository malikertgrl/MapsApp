// In App.js in a new project

import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import TabNavigator from "./TabNavigator"
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';




const RootNavigation = () => {
    const Stack = createStackNavigator()
    const { isDarkMode, userInfo, isLogin } = useSelector(state => state.SystemReducer)



    useEffect(() => {
        console.log("isLogin", isLogin)
    }, [isLogin])


    return (
        <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme} >
            <Stack.Navigator initialRouteName={isLogin ? "TabNavigator" : "LoginScreen"}
                screenOptions={{
                    headerShown: false
                }}>
                {isLogin ?
                    <Stack.Screen name="TabNavigator" component={TabNavigator} />
                    :
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />

                }


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation