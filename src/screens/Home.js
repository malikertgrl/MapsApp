import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import I18n from "../i18n/index"
import CustomView from '../components/customView'
const Home = ({ navigation }) => {

    return (
        <CustomView>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <CustomButton title={I18n.t("logout")} onPress={() => navigation.navigate("LoginScreen")} />
            </View>
        </CustomView>

    )
}

export default Home

const styles = StyleSheet.create({})
