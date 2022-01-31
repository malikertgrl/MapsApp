import React, { useState, useEffect } from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native'
import Input from "../components/input"
import CustomButton from "../components/CustomButton"
import CheckBox from '../components/checkBox'
import { Colors, Images, Layout } from "../constants"
import DeviceInfo from 'react-native-device-info';
import { useDispatch, useSelector } from "react-redux"
import I18n from "../i18n"
import CustomView from "../components/customView";
import CustomText from "../components/CustomText"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { set_user } from "../redux/action"


const LoginScreen = ({ navigation }) => {
    const userNameText = I18n.t("username")
    const passwordText = I18n.t("password")
    const rememberMeText = I18n.t("rememberMe")
    const loginText = I18n.t("login")

    const dispatch = useDispatch()

    const versionNumber = DeviceInfo.getVersion();

    const [rememberMe, setRememberMe] = useState(true)
    const [pageData, setPageData] = useState({
        username: "MLK2021",
        password: "123456"
    })


    const onChangeText = (key, value) => {
        setPageData(page => ({ ...page, [key]: value }))

    }

    const handleRememberMe = () => {
        setRememberMe(remember => !remember)
    }

    const setUser = async () => {
        if (pageData.username == "" || pageData.password == "") {
            ToastAndroid.show(I18n.t("notBeLeftBlank"), ToastAndroid.SHORT);
        } else {
            // console.log("elsedeyiz", pageData);
            await AsyncStorage.setItem("user", JSON.stringify(pageData))

            dispatch(set_user(pageData))
            navigation.navigate("TabNavigator")
        }
    }





    return (
        <CustomView >
            {/* <View style={styles.containerStyle}> */}
            <View style={styles.innerContainer}>
                <View style={styles.image}>
                    <Image
                        style={{ width: Layout.windowWidth / 2, height: Layout.windowHeight / 3, resizeMode: "contain" }}
                        source={Images.logo} />
                </View>

                <View>
                    <View>
                        <Input
                            IconName={"envelope"}
                            value={pageData.username}
                            onChangeText={text => onChangeText("username", text)}
                            placeholder={userNameText}
                            placeholderTextColor={Colors.white9}
                            secureIcon={false}

                        />
                    </View>


                    <View>
                        <View >
                            <Input
                                IconName={"lock"}
                                value={pageData.password}
                                onChangeText={text => onChangeText("password", text)}
                                placeholder={passwordText}
                                placeholderTextColor={Colors.white9}
                                secureIcon={true}

                            />

                        </View>

                    </View>
                    <View>
                        <CheckBox
                            onChangeState={() => handleRememberMe()}
                            checked={rememberMe}
                            checkedColor={Colors.white}
                            checkBoxTitle={rememberMeText}
                        />
                    </View>

                </View>
                <View >
                    <CustomButton title={loginText} onPress={() => setUser()} />

                </View>
                <View style={[styles.versionView, { marginTop: Layout.windowHeight / 4 - 10 }]}>
                    <CustomText> v{versionNumber}</CustomText>

                </View>
            </View>



            {/* </View > */}
        </CustomView>

    )
}



export default LoginScreen

const styles = StyleSheet.create({
    containerStyle: { flex: 1, backgroundColor: Colors.backGroundColor },
    innerContainer: { marginHorizontal: 15, },
    image: { alignItems: "center" },
    versionText: { color: Colors.white },
    versionView: { alignItems: "center" }
})

