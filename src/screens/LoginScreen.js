import React, { useState, useEffect } from "react"
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Input from "../components/input"
import CustomButton from "../components/CustomButton"
import CheckBox from '../components/checkBox'
import { Colors, Images } from "../constants"


const LoginScreen = ({ navigation }) => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        console.log("loginScrren")
        console.log("colo", Images)
        console.log("navigation", navigation)


    }, [])



    return (
        <View style={{ flex: 1, backgroundColor: Colors.backGroundColor }}>
            <View style={{ marginHorizontal: 15 }}>
                <View style={{ marginTop: 50, alignItems: "center", }}>
                    <Image source={Images.logo} />
                </View>
                <View>
                    <View>
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
                        <View >
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
                <View >
                    <CustomButton title="Giriş Yap" onPress={() => navigation.navigate("Home")} />

                </View>
            </View>



        </View >
    )
}

export default LoginScreen
