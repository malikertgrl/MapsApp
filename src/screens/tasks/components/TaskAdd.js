import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import React, { useState } from 'react';
import { Colors, Layout } from "../../../constants"
import I18n from '../../../i18n';
import Icon from '../../../components/Icon';


const TaskAdd = () => {
    const [text, setText] = useState("")
    const [tasks, setTasks] = useState([
        {
            text: "",
            completed: false,
            id: ""
        }
    ]);

    const addTodo = (text) => {
        console.log("text ne geliyır", tasks);
        setTasks({ ...tasks, text, id: Math.random() })
    }

    return (
        <View >
            <View>
                <Text> {tasks.text}</Text>
                <Text> {tasks.id} </Text>
                <Text> {tasks.completed} </Text>

            </View>
            <View style={styles.Container}>
                <View style={styles.InputStyle}>
                    <TextInput
                        style={{ color: Colors.white, padding: 15 }}
                        autoCapitalize={"words"}
                        placeholder={I18n.t("tasks")}
                        placeholderTextColor={Colors.white9}
                        onChangeText={text => setText(text)}
                        value={text}
                    />
                </View>
                <TouchableOpacity onPress={() => addTodo(text)} >
                    <View style={styles.IconStyle}>
                        <Icon name="plus" />

                    </View>
                </TouchableOpacity>
            </View>


        </View>
    );
};

export default TaskAdd;

const styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
        flex: 1,
        marginTop: Layout.windowHeight / 5,

    },
    InputStyle: {
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 20,
        margin: 10,
        justifyContent: "center",
        autoCapitalize: "characters",
        height: Layout.windowHeight / 15

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
