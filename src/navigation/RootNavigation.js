// In App.js in a new project

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen'
import { Colors } from '../constants';


function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        console.log(Colors)

    }, [])
    return (
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName={isLogin ? "HomeScreen" : "LoginScreen"}
                screenOptions={{

                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    headerTintColor: Colors.black,
                    headerTitleAlign: "center",
                    gestureDirection: 'horizontal',
                    gestureEnabled: true,

                    headerStyle: {
                        backgroundColor: Colors.white,
                    },
                    headerTitleStyle: {
                        fontWeight: '500',

                    },
                }}
            >
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;