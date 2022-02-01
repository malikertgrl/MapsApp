import { StyleSheet, Text, View, Switch } from 'react-native';
import React, { useLayoutEffect, useEffect, useState } from 'react';
import CustomView from '../components/customView';
import { useSelector, useDispatch } from 'react-redux';
import { set_theme, user_logOut, set_user } from '../redux/action';
import CustomText from '../components/CustomText';
import CustomButton from '../components/CustomButton';
import I18n from "../i18n";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Picker from '../components/pickerSelect';


const Profile = ({ navigation }) => {
    const { isDarkMode, userInfo } = useSelector(state => state.SystemReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(userInfo, "boş mu");
    }, [userInfo])


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



    return (
        <CustomView>
            <View style={{ alignItems: "center", marginTop: 10 }}>
                <CustomText>{I18n.t("welcome")} {userInfo.username} </CustomText>

            </View>
            <View>
                <Picker
                    onValueChange={(value) => console.log(value)}
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
                <CustomText> Tema Seçimi </CustomText>
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
