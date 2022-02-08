import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


const Picker = ({ placeHolder, items, onValueChange, value }) => {
    return (
        <View style={{ borderWidth: 1, borderColor: "white", margin: 5, borderRadius: 10, }}>
            <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                value={value}
                placeholder={
                    placeHolder
                }
                onValueChange={onValueChange}
                items={items}
                Icon={() => {
                    return <FontAwesome5 name="sort-down" size={24} color="white" />;
                }}
                style={{
                    iconContainer: {
                        top: 7,
                        right: 10,
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



