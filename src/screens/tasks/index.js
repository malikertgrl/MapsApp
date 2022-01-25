import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomView from '../../components/customView';
import TaskAdd from "./components/TaskAdd"

const Task = () => {
    return (
        <CustomView>

            <View >
                <TaskAdd />
            </View>
        </CustomView>
    );
};

export default Task;

const styles = StyleSheet.create({});
