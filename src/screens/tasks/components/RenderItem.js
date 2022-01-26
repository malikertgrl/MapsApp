import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from "../../../components/Icon"

const RenderItem = ({ item, onPress }) => {
    const [isComplete, setIsComplete] = useState(false)
    return (

        // console.log(item) ||

        <View style={styles.renderStyle}>

            <View>
                <Text style={[styles.textStyle, { textDecorationLine: isComplete ? "line-through" : null }]}> {item.task} </Text>

            </View>
            <View style={{ flexDirection: "row", }}>
                <View style={styles.IconStyle}>
                    <TouchableOpacity onPress={() => setIsComplete(true)}>
                        <View>
                            <Icon name="check" color="green" />

                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.IconStyle}>
                    <TouchableOpacity onPress={onPress} >
                        <View >
                            <Icon name="trash" color="red" />

                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        </View>


    );
};

export default RenderItem;

const styles = StyleSheet.create({
    renderStyle: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: 10 },
    IconStyle: {


        padding: 10
    },
    textStyle: { color: "#fff" }
});
