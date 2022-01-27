import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const CustomText = (props) => {

    const { isDarkmode } = useSelector(state => state.SystemReducer)

    const textColor = {
        fontSize: 18,
        color: "#fff",
        ...props.style

    }
    return (
        <View>
            <Text style={textColor} > {props.children} </Text>
        </View>
    );
};

export default CustomText;

const styles = StyleSheet.create({});
