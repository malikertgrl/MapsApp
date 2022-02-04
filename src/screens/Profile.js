import { StyleSheet, Text, View, Switch } from 'react-native';
import React, { useLayoutEffect, useEffect, useState } from 'react';
import CustomView from '../components/customView';
import { useSelector, useDispatch } from 'react-redux';
import { set_theme, user_logOut, set_user, set_language } from '../redux/action';
import CustomText from '../components/CustomText';
import CustomButton from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Picker from '../components/pickerSelect';
import I18n, { changeLang } from "../i18n"




const Profile = ({ navigation }) => {
    const { isDarkMode, userInfo, language } = useSelector(state => state.SystemReducer)
    const dispatch = useDispatch();

    useEffect(() => {

        console.log("language", language);
    }, [language])


    const toggle_theme = (val) => {
        dispatch(set_theme(val))

        // console.log("switch", val);
    }

    const logOut = async () => {
        dispatch(user_logOut())
        try {
            await AsyncStorage.removeItem("user")

        } catch (error) {
            console.log(error);
        }
        navigation.navigate("LoginScreen")
    }

    const setLanguage = (val) => {
        if (val) {
            dispatch(set_language(val))
            changeLang(val)
        }


    }



    return (
        <CustomView>
            <View style={{ alignItems: "center", marginTop: 10 }}>
                <CustomText>{I18n.t("welcome")} {userInfo.username} </CustomText>

            </View>
            <View>
                <Picker
                    value={language}
                    onValueChange={(val) => setLanguage(val)}
                    placeHolder={{
                        label: 'Dil Seciniz..',
                        value: null
                    }}
                    items={[
                        { label: 'Türkçe', value: 'tr', },
                        { label: 'İngilizce', value: 'en', },
                    ]}
                />

            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <CustomText> {I18n.t("dark_mode")} </CustomText>
                <Switch
                    onValueChange={val => toggle_theme(val)}
                    value={isDarkMode}
                />
            </View>
            <CustomButton title={I18n.t("logout")} onPress={() => logOut()} />
        </CustomView>

    );
};

export default Profile;

const styles = StyleSheet.create({});
