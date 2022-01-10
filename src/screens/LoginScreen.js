import React, { useState, useEffect } from "react"
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Input from "../components/input"
import CustomButton from "../components/CustomButton"
import CheckBox from '../components/checkBox'
import { Colors, Images } from "../constants"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


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
                        IconName={"envelope"}
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        placeholder="e-mail:"
                        placeholderTextColor={Colors.white}
                        secureIcon={false}

                    />
                </View>


                <View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Input
                            IconName={"lock"}
                            value={password}
                            onChangeText={(password) => setPassword(password)}
                            placeholder="şifre:"
                            placeholderTextColor={Colors.white}
                            secureIcon={true}

                        />

                    </View>

                </View>
                <View>
                    <CheckBox />
                </View>

            </View>
            <View style={{ marginVertical: 10 }}>
                <CustomButton title="Giriş Yap" onPress={() => console.log("tıklandı")} />

            </View>


        </View>
    )
}

export default LoginScreen
