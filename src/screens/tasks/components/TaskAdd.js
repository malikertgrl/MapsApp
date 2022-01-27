import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { Colors, Layout } from "../../../constants"
import I18n from '../../../i18n';
import Icon from '../../../components/Icon';


const TaskAdd = ({ onPress, text, onChangeText }) => {


    return (


        <View style={styles.Container}>
            <View style={styles.InputStyle}>
                <TextInput
                    style={{ color: Colors.white, padding: 15 }}
                    autoCapitalize={"words"}
                    placeholder={I18n.t("tasks")}
                    placeholderTextColor={Colors.white9}
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>
            <TouchableOpacity onPress={onPress} >
                <View style={styles.IconStyle}>
                    <Icon name="plus" />

                </View>
            </TouchableOpacity>
        </View>



    );
};

export default TaskAdd;

const styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
        position: "absolute",
        marginTop: 550,
        zIndex: 100

    },
    InputStyle: {

        flex: 1,
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 10,
        margin: 10,
        justifyContent: "center",
        autoCapitalize: "characters",
        height: Layout.windowHeight / 16
    },
    IconStyle: {
        width: 50,
        height: 50,
        backgroundColor: Colors.white,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        margin: 10
    }
});
