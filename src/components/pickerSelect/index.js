import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from "react-native-vector-icons/Ionicons";


const Picker = ({ placeHolder, items, onValueChange, value }) => {
    return (
        <View style={{ borderWidth: 1, borderColor: "white", margin: 5, borderRadius: 10 }}>
            <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                value={value}
                placeholder={
                    placeHolder
                }
                textInputProps={{ underlineColor: 'yellow' }}
                placeholderTextColor="red"
                onValueChange={onValueChange}
                items={items}
                Icon={() => {
                    return <Ionicons name="arrow-down" size={24} color="white" />;
                }}
                style={{
                    iconContainer: {
                        top: 10,
                        right: 12,
                    },
                    inputAndroid: {
                        fontSize: 16,
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        borderWidth: 0.5,
                        borderColor: 'purple',
                        borderRadius: 8,
                        color: 'white',
                        paddingRight: 30, // to ensure the text is never behind the icon
                    },
                    iinputIOS: {
                        fontSize: 16,
                        paddingVertical: 12,
                        paddingHorizontal: 10,
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 4,
                        color: 'white',
                        paddingRight: 30, // to ensure the text is never behind the icon
                    },
                }}
            />
        </View>
    );
};

export default Picker;

const styles = StyleSheet.create({});



