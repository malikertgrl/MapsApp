import React, { useState, useEffect } from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Input from "../components/input"
import CustomButton from "../components/CustomButton"
import CheckBox from '../components/checkBox'
import { Colors, Images } from "../constants"


const LoginScreen = ({ navigation }) => {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    const [rememberMe, setRememberMe] = useState(true)
    const [pageData, setPageData] = useState({
        username: "malik.11@gmail.com",
        password: "123456"
    })

    useEffect(() => {
        console.log("loginScrren")
        console.log("colo", Images)
        console.log(pageData)


    }, [])

    const onChangeText = (key, value) => {
        setPageData(page => ({ ...page, [key]: value }))
    }

    const handleRememberMe = () => {
        setRememberMe(remember => !remember)
        console.log({ rememberMe });
    }




    return (
        <View style={{ flex: 1, backgroundColor: Colors.backGroundColor }}>
            <View style={{ marginHorizontal: 15 }}>
                <View style={{ marginTop: 50, alignItems: "center" }}>
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
            </View>



        </View >
    )
}



export default LoginScreen
