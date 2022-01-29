import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import CustomView from '../components/customView'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomText from '../components/CustomText'
import I18n from '../i18n'
import { set_user } from "../redux/action"



const Home = () => {
    const [userInfo, setUserInfo] = useState([])

    const dispatch = useDispatch();

    // const { userInfo } = useSelector(state => state.SystemReducer)

    const getUserInfo = async () => {
        const userInfo = await AsyncStorage.getItem("user")
        if (userInfo != null) {
            const parseData = JSON.parse(userInfo)
            setUserInfo(parseData)
            dispatch(set_user(parseData))

        }
    }

    useEffect(() => {
        getUserInfo()
    }, [])
    return (
        <CustomView>
            <View style={{ margin: 10, alignItems: "center" }}>
                <CustomText style={{ fontSize: 25 }}> {I18n.t("welcome")} {userInfo.username} </CustomText>
                <CustomText> </CustomText>
            </View>
        </CustomView>

    )
}

export default Home

const styles = StyleSheet.create({})
