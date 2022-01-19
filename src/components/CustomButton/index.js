import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Colors } from '../../constants'

const CustomButton = ({ title, onPress }) => {
    return (
        <View >
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonStyle: { backgroundColor: Colors.white, margin: 10, padding: 10, justifyContent: "center", alignItems: "center" },
    textStyle: { color: Colors.black, fontWeight: "bold" }
})
