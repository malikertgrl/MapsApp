import React, { useState, useEffect } from "react"
import { View, Text } from 'react-native'
import Input from "../components/input"
import CustomButton from "../screens/Home"


const LoginScreen = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        console.log("loginScrren")

    }, [])

    return (
        <View>
            {/* <Text>sdadsa</Text> */}
            <Input
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <Input
                value={password}
                onChangeText={(password) => setPassword(password)}
            />
            <CustomButton title="login" onPress={() => console.log("tıklandı")} />
        </View>
    )
}

export default LoginScreen
