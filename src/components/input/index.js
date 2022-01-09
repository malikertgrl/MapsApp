import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Colors } from '../../constants'
// import Icon from 'react-native-vector-icons/FontAwesome';


const Input = ({ onChangeText, value, placeholder, placeholderTextColor }) => {

    useEffect(() => {
        console.log("ınput")
    }, [])

    return (
        <View >
            {/* <Icon name="rocket" size={30} color="#900" />; */}
            <TextInput
                style={{ color: Colors.white, borderBottomWidth: 1, borderBottomColor: Colors.white }}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({})
