import { StyleSheet, Text, View, FlatList, ToastAndroid } from 'react-native';
import React, { useState, useEffect } from 'react';
import CustomView from '../../components/customView';
import TaskAdd from "./components/TaskAdd"
import RenderItem from './components/RenderItem';
import I18n from '../../i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Task = () => {


    const listKey = "tasks"
    const [list, setList] = useState([]);
    const [text, setText] = useState("")

    const getTasks = async () => {

        const userTasks = await AsyncStorage.getItem(listKey)
        console.log("userTasks", userTasks);
        if (userTasks) {

            const parseJson = JSON.parse(userTasks)
            setList(parseJson)
        }

    }

    const setTasks = async payload => {

        const stringifyData = JSON.stringify(payload)
        await AsyncStorage.setItem(listKey, stringifyData)

    }

    useEffect(() => {
        getTasks()
    }, [])


    useEffect(() => {
        setTasks(list)
    }, [list])

    const addTodo = async (text) => {
        if (text === "") {
            ToastAndroid.showWithGravityAndOffset(
                I18n.t("emptyInput"),
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                0,
                150
            );
        } else {
            const newItem = {
                id: Math.random(),
                task: text,
                completed: false
            };
            setList([newItem, ...list]);
            setText("")
        }
    };

    const markTodoComplete = (todoId) => {
        const newTodoItem = list.map(item => {
            if (item.id === todoId) {
                return { ...item, completed: true }
            }
            return item;
        })
        setList(newTodoItem)

    }

    const deleteItem = (id) => {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
    };

    return (
        <CustomView >
            <View>
                <FlatList
                    keyExtractor={item => item.id}
                    data={list}
                    renderItem={({ item }) =>
                        <RenderItem
                            deleteItem={() => deleteItem(item.id)}
                            markTodoComplete={() => markTodoComplete(item.id)}
                            item={item} />
                    }
                />
            </View>
            <View style={styles.taskAdd}>
                <TaskAdd
                    text={text}
                    onChangeText={(text) => setText(text)}
                    onPress={() => addTodo(text)} />
            </View>
        </CustomView>
    );
};

export default Task;

const styles = StyleSheet.create({
    taskAdd: {
        flex: 1, justifyContent: "flex-end",
        marginBottom: 15

    }
});
