import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import CustomView from '../components/customView'
import { useSelector, useDispatch } from 'react-redux'
import CustomText from '../components/CustomText'
import I18n from '../i18n'
import Picker from "../components/pickerSelect"
import Input from '../components/input'



const Home = () => {
    const [mission, setMission] = useState({
        preject: "",
        hour: "",
        description: ""
    });


    const { isDarkMode, userInfo } = useSelector(state => state.SystemReducer)



    return (
        <CustomView >
            <View style={{ margin: 10, }}>
                <View style={{ margin: 10, alignItems: "center" }}>
                    <CustomText style={{ fontSize: 25 }}> {I18n.t("welcome")} {userInfo.username} </CustomText>
                </View>
                <View>
                    <Picker
                        onValueChange={(value) => console.log(value)}
                        placeHolder={{
                            label: 'Proje',
                            value: null
                        }}
                        items={[
                            { label: 'marvelApp', value: 'marvelApp', },
                            { label: 'TodoApp', value: 'TodoApp', },
                        ]}
                    />

                    <Picker
                        onValueChange={(value) => console.log(value)}
                        placeHolder={{
                            label: 'Saat seçiniz...',
                            value: null
                        }}
                        items={[
                            { label: '1 saat', value: '60', },
                            { label: '2 saat', value: '120', },
                            { label: '3 saat', value: '180', },
                            { label: '4 saat', value: '240', },
                            { label: '5 saat', value: '300', },
                            { label: '6 saat', value: '360', },


                        ]}
                    />



                </View>

                <Input
                    placeholder={"Açıklama giriniz..."}
                    placeholderTextColor={"white"}

                    value={mission.description}
                />




                <CustomButton
                    title={"Çalışmayı Kaydet"}
                />
            </View>

        </CustomView>

    )
}

export default Home


