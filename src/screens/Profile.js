import { StyleSheet, Text, View, Switch, Image } from 'react-native';
import React, { useLayoutEffect, useEffect, useState } from 'react';
import CustomView from '../components/customView';
import { useSelector, useDispatch } from 'react-redux';
import { set_theme, user_logOut, set_user, set_language } from '../redux/action';
import CustomText from '../components/CustomText';
import CustomButton from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Picker from '../components/pickerSelect';
import I18n, { changeLang } from "../i18n"
import { Colors, Images, Layout } from "../constants"



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
        <CustomView >
            <View style={{ alignItems: "center", }}>
                <View style={{ marginTop: 10, }}>
                    <CustomText>{I18n.t("welcome")} {userInfo.username} </CustomText>

                </View>
                <View style={{ margin: 10 }}>
                    <Image
                        source={require("../assets/images/sadface2.jpg")}
                        style={{ width: 150, height: 150, borderRadius: 75 }}
                    />
                </View>



                <View style={{ flexDirection: "row", alignItems: "center", margin: 15 }}>
                    <CustomText> {I18n.t("choice_lang")} </CustomText>
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

                <View style={{ flexDirection: "row", margin: 15 }}>
                    <CustomText> {I18n.t("dark_mode")} </CustomText>
                    <Switch
                        onValueChange={val => toggle_theme(val)}
                        value={isDarkMode}
                    />
                </View>
            </View>
            <View>
                <CustomButton title={I18n.t("logout")} onPress={() => logOut()} />

            </View>

        </CustomView>

    );
};

export default Profile;

const styles = StyleSheet.create({});
