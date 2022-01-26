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

    const getList = async () => {
        try {
            const userTasks = await AsyncStorage.getItem(listKey)
            return userTasks != null ? JSON.parse(userTasks) : null;
        } catch (e) {
            console.log("e:", e);
        }
    }

    useEffect(() => {
        getList()
    }, [])

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
            try {

                await AsyncStorage.setItem(listKey, JSON.stringify(list))

            } catch (error) {
                console.log(error);
            }
            console.log(list, "todo");
        }


    };

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
                            onPress={() => deleteItem(item.id)}
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
        flex: 1, justifyContent: "flex-end"

    }
});
