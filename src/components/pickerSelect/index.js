import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RNPickerSelect from 'react-native-picker-select';


const Picker = ({ placeHolder, items, onValueChange }) => {
    return (
        <View style={{ borderWidth: 1, borderColor: "white", margin: 5, borderRadius: 10 }}>
            <RNPickerSelect
                placeholder={
                    placeHolder
                }
                placeholderTextColor="red"
                onValueChange={onValueChange}
                items={items}
            />
        </View>
    );
};

export default Picker;

const styles = StyleSheet.create({});



