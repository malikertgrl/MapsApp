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
    const { isDarkMode } = useSelector(state => state.SystemReducer)
    const [userData, setUserData] = useState([])

    const getItem = async () => {
        const data = await AsyncStorage.getItem("user")
        console.log("parsee", data);
        if (data != null) {
            const parse = JSON.parse(data)
            console.log("data boş değil", parse);
            setUserData(parse)
        } else {
            console.log("e null");
            setUserData(null)
        }
    }

    useEffect(() => {
        getItem()

    }, [])


    return (
        <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme} >
            <Stack.Navigator initialRouteName={userData != null ? "TabNavigator" : "LoginScreen"}
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