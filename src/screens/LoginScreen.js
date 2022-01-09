import React, { useState, useEffect } from "react"
import { View, Text, Image } from 'react-native'
import Input from "../components/input"
import CustomButton from "../components/CustomButton"
import { Colors, Images } from "../constants"

const LoginScreen = () => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        console.log("loginScrren")
        console.log("colo", Images)

    }, [])

    return (
        <View style={{ marginHorizontal: 20, }}>

            <View style={{ marginTop: 50, alignItems: "center" }}>
                <Image source={Images.logo} />
            </View>
            <View>
                <View style={{ marginBottom: 10 }}>
                    <Input
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        placeholder="e-mail:"
                        placeholderTextColor={Colors.white}

                    />
                </View>


                <View>
                    <Input
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        placeholder="şifre:"
                        placeholderTextColor={Colors.white}

                    />
                </View>

            </View>
            <View style={{ marginVertical: 70 }}>
                <CustomButton title="Giriş Yap" onPress={() => console.log("tıklandı")} />

            </View>


        </View>
    )
}

export default LoginScreen
