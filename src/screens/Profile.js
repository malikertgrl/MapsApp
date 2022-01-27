import { StyleSheet, Text, View, Switch } from 'react-native';
import React from 'react';
import CustomView from '../components/customView';
import { useSelector, useDispatch } from 'react-redux';
import { set_theme } from '../redux/action';
import CustomText from '../components/CustomText';
import CustomButton from '../components/CustomButton';
import I18n from "../i18n/index"



const Profile = ({ navigation }) => {
    const { isDarkMode } = useSelector(state => state.SystemReducer)
    const dispatch = useDispatch();

    const toggle_theme = (val) => {
        dispatch(set_theme(val))

        // console.log("switch", val);
    }

    return (
        <CustomView>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <CustomText> Tema Seçimi </CustomText>
                <Switch
                    onValueChange={val => toggle_theme(val)}
                    value={isDarkMode}
                />
            </View>
            <CustomButton title={I18n.t("logout")} onPress={() => navigation.navigate("LoginScreen")} />
        </CustomView>

    );
};

export default Profile;

const styles = StyleSheet.create({});
