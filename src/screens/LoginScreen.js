import React, { useState, useEffect } from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Input from "../components/input"
import CustomButton from "../components/CustomButton"
import CheckBox from '../components/checkBox'
import { Colors, Images } from "../constants"
import DeviceInfo from 'react-native-device-info';


const LoginScreen = ({ navigation }) => {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    const versionNumber = DeviceInfo.getVersion();

    const [rememberMe, setRememberMe] = useState(true)
    const [pageData, setPageData] = useState({
        username: "malik.11@gmail.com",
        password: "123456"
    })

    useEffect(() => {
        console.log("loginScrren")
        console.log("colo", Images)
        console.log(pageData)
        console.log(versionNumber)

    }, [])

    const onChangeText = (key, value) => {
        setPageData(page => ({ ...page, [key]: value }))
    }

    const handleRememberMe = () => {
        setRememberMe(remember => !remember)
        console.log({ rememberMe });
    }




    return (
        <View style={styles.containerStyle}>
            <View style={styles.innerContainer}>
                <View style={styles.image}>
                    <Image source={Images.logo} />
                </View>
                <View>
                    <View>
                        <Input
                            IconName={"envelope"}
                            value={pageData.username}
                            onChangeText={text => onChangeText("username", text)}
                            placeholder="username:"
                            placeholderTextColor={Colors.white}
                            secureIcon={false}

                        />
                    </View>


                    <View>
                        <View >
                            <Input
                                IconName={"lock"}
                                value={pageData.password}
                                onChangeText={text => onChangeText("password", text)}
                                placeholder="şifre:"
                                placeholderTextColor={Colors.white}
                                secureIcon={true}

                            />

                        </View>

                    </View>
                    <View>
                        <CheckBox
                            onChangeState={() => handleRememberMe()}
                            checked={rememberMe}
                            checkedColor={Colors.white}
                        />
                    </View>

                </View>
                <View >
                    <CustomButton title="Giriş Yap" onPress={() => navigation.navigate("Home")} />

                </View>
                <View style={styles.versionView}>
                    <Text style={styles.versionText}>v{versionNumber}</Text>

                </View>
            </View>



        </View >
    )
}



export default LoginScreen

const styles = StyleSheet.create({
    containerStyle: { flex: 1, backgroundColor: Colors.backGroundColor },
    innerContainer: { marginHorizontal: 15 },
    image: { marginTop: 50, alignItems: "center" },
    versionText: { color: Colors.white },
    versionView: { alignItems: "center", position: "relative", marginTop: 200 }
})

