// In App.js in a new project

import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './MyStack'




function RootNavigation() {

    return (
        <NavigationContainer >
            <MyStack />
        </NavigationContainer>
    );
}

export default RootNavigation;