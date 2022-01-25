import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { Colors, Layout } from "../../../constants"
import I18n from '../../../i18n';
import Icon from '../../../components/Icon';


const TaskAdd = () => {
    const [text, setText] = useState("")
    const [tasks, setTasks] = useState([]);

    const addTodo = () => {
        if (text === "") {
            Alert.alert("hata", "Lütfen görev giriniz")
        } else {
            const newTodo = {
                id: Math.random(),
                task: text,
                completed: false,
            }


            setTasks([...tasks, newTodo])
            setText("")

            console.log(tasks);

        }
    }

    return (
        <View >
            <View>
                {/* <FlatList
                    keyExtractor={item => item.id}
                    data={tasks}
                    renderItem={({ item }) => {
                        return (
                            console.log(item) ||
                            <View>
                                <Text> {item} </Text>
                            </View>
                        )
                    }}
                /> */}

            </View>
            <View style={styles.Container}>
                <View style={styles.InputStyle}>
                    <TextInput
                        style={{ color: Colors.white, padding: 15 }}
                        autoCapitalize={"words"}
                        placeholder={I18n.t("tasks")}
                        placeholderTextColor={Colors.white9}
                        onChangeText={setText}
                        value={text}
                    />
                </View>
                <TouchableOpacity onPress={addTodo()} >
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
