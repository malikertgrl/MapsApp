import { StyleSheet, Text, View, Switch } from 'react-native';
import React from 'react';
import CustomView from '../components/customView';
import { useSelector, useDispatch } from 'react-redux';
import { set_theme } from '../redux/action';

const Profile = () => {
    const { isDarkMode } = useSelector(state => state.SystemReducer)
    const dispatch = useDispatch();

    const toggle_theme = (val) => {
        dispatch(set_theme(val))
        console.log("switch", val);
    }

    return (
        <CustomView>
            <View style={{ marginTop: 100, alignItems: "center" }}>
                <Text>
                    isDarkMode
                </Text>
                <Switch
                    onValueChange={val => toggle_theme(val)}
                    value={isDarkMode}
                />

            </View>
        </CustomView>

    );
};

export default Profile;

const styles = StyleSheet.create({});
