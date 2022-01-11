import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen'
import Home from '../screens/Home'




const Stack = createStackNavigator();
console.log("stack", Stack)
const MyStack = () => {
    const [isLogin, setIsLogin] = useState(false)


    return (
        <Stack.Navigator initialRouteName={isLogin ? "Home" : "LoginScreen"}
            screenOptions={{
                //gestureEnabled: true screenOptions içerisinde çalıştırmak lazım bir de
                //gestureDirection ile yön belirtmek gerekiyor.
                gestureDirection: 'horizontal',
                gestureEnabled: true,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerTitleAlign: "center",

            }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} />

        </Stack.Navigator>
    )
}

export default MyStack

const styles = StyleSheet.create({})
