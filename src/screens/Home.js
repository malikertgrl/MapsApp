import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import CustomView from '../components/customView'
import { useSelector, useDispatch } from 'react-redux'
import CustomText from '../components/CustomText'
import I18n from '../i18n'



const Home = () => {

    const { isDarkMode, userInfo } = useSelector(state => state.SystemReducer)



    return (
        <CustomView>
            <View style={{ margin: 10, alignItems: "center" }}>
                <CustomText style={{ fontSize: 25 }}> {I18n.t("welcome")} {userInfo.username} </CustomText>
            </View>
        </CustomView>

    )
}

export default Home


