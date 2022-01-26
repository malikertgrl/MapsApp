import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from "../../../components/Icon"
import { Colors } from '../../../constants';
import { useSelector } from 'react-redux';

const RenderItem = ({ item, onPress }) => {
    const [isComplete, setIsComplete] = useState(false)
    const { isDarkMode } = useSelector(state => state.SystemReducer)
    return (


        <View style={[styles.renderStyle, { backgroundColor: isDarkMode ? Colors.black5 : Colors.cartColor, }]}>

            <View >
                <Text style={[styles.textStyle, { textDecorationLine: isComplete ? "line-through" : null }]}> {item.task} </Text>

            </View>
            <View style={{ flexDirection: "row", }}>
                <View style={styles.IconStyle}>
                    <TouchableOpacity onPress={() => setIsComplete(true)}>
                        <View style={styles.IconViewStyle}>
                            <Icon name="check" color="green" size={20} />

                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.IconStyle}>
                    <TouchableOpacity onPress={onPress} >
                        <View style={styles.IconViewStyle} >
                            <Icon name="trash" color="red" size={20} />

                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        </View>


    );
};

export default RenderItem;

const styles = StyleSheet.create({
    renderStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        marginHorizontal: 5,
        padding: 5,
        borderRadius: 10
    },
    IconStyle: {
        padding: 10
    },
    IconViewStyle: {
        width: 30, height: 30, backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },
    textStyle: { color: "#fff" }
});
