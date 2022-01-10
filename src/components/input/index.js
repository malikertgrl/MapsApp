import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Colors } from '../../constants'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const Input = ({ onChangeText, value, placeholder, placeholderTextColor, IconName }) => {

    useEffect(() => {
        console.log("ınput")
    }, [])

    return (
        <View style={{ flexDirection: "row", alignItems: "center", margin: 10, borderBottomWidth: 1, borderBottomColor: Colors.white }}>
            <View style={{ margin: 10 }}>
                <FontAwesome5 name={IconName} size={20} color="#fff" />

            </View>
            <View style={{ flex: 1 }}>
                <TextInput
                    style={{ color: Colors.white }}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                />
            </View>


        </View>
    )
}

export default Input

const styles = StyleSheet.create({})
