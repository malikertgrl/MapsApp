import { StyleSheet, Text, View, Switch } from 'react-native';
import React from 'react';
import CustomView from '../components/customView';
import { useSelector, useDispatch } from 'react-redux';
import { set_theme, user_logOut } from '../redux/action';
import CustomText from '../components/CustomText';
import CustomButton from '../components/CustomButton';
import I18n from "../i18n"
// import RNPickerSelect from 'react-native-picker-select';



const Profile = ({ navigation }) => {
    const { isDarkMode, userInfo } = useSelector(state => state.SystemReducer)
    const dispatch = useDispatch();

    const toggle_theme = (val) => {
        dispatch(set_theme(val))

        // console.log("switch", val);
    }

    const logOut = () => {
        dispatch(user_logOut())
        navigation.navigate("LoginScreen")
    }

    return (
        <CustomView>
            <View style={{ alignItems: "center", marginTop: 10 }}>
                <CustomText>{I18n.t("welcome")} {userInfo.username} </CustomText>

            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                {/* <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                    ]}
                /> */}
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
