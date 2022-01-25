import React, { useEffect, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from "../../constants"
import { useSelector } from 'react-redux';

const CustomView = (props) => {
    const { isDarkMode } = useSelector(state => state.SystemReducer)

    const containerStyle = useMemo(() => {
        // console.log("containerStyle", isDarkMode);
        const styles = {
            flex: 1,
            backgroundColor: isDarkMode ?
                "#212121" :
                Colors.backGroundColor,
            ...props.style
        }
        return styles;
    }, [props, isDarkMode])

    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

export default CustomView;

const styles = StyleSheet.create({});
