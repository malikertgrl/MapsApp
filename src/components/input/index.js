import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Colors } from '../../constants'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const Input = ({
    onChangeText,
    value,
    placeholder,
    placeholderTextColor,
    IconName,
    secureTextEntry,
    secureIcon
}) => {
    const [isShownSecureIcon, setIsShownSecureIcon] = useState(false)




    return (
        <View style={styles.containerStyle}>
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
                    secureTextEntry={isShownSecureIcon}
                />
            </View>
            <View style={{ margin: 10 }}>
                {secureIcon &&
                    <TouchableOpacity onPress={() => setIsShownSecureIcon(val => !val)} >
                        <FontAwesome5 name={isShownSecureIcon ? "eye-slash" : "eye"} size={20} color="#fff" />
                    </TouchableOpacity>
                }
            </View>


        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.white9
    },
})
