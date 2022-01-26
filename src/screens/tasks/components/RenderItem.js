import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from "../../../components/Icon"
import { Colors, Layout } from '../../../constants';
import { useSelector } from 'react-redux';

const RenderItem = ({ item, deleteItem, markTodoComplete }) => {

    const { isDarkMode } = useSelector(state => state.SystemReducer)

    console.log("renderItem", item.completed);



    return (

        <View style={[styles.renderStyle, { backgroundColor: isDarkMode ? Colors.black5 : Colors.cartColor, }]}>

            <View style={{ width: Layout.windowWidth / 2 + 75 }}>
                <Text style={[styles.textStyle, { textDecorationLine: item.completed ? "line-through" : null }]}> {item.task} </Text>

            </View>

            <View style={{ flexDirection: "row", }}>
                {!item.completed &&
                    <View style={styles.IconStyle}>
                        <TouchableOpacity onPress={markTodoComplete}>
                            <View style={styles.IconViewStyle}>
                                <Icon name="check" color="green" size={20} />

                            </View>
                        </TouchableOpacity>
                    </View>

                }
                <View style={styles.IconStyle}>
                    <TouchableOpacity onPress={deleteItem} >

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
        width: 30,
        height: 30,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },
    textStyle: { color: "#fff" }
});
