import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CustomButton = ({ title, onPress }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View>
                    <Text>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({})
