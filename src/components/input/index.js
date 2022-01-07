import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const Input = ({ onChangeText, value }) => {

    useEffect(() => {
        console.log("ınput")

    }, [])
    return (
        <View style={{ margin: 15 }}>
            <TextInput
                style={{ borderWidth: 1 }}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({})
