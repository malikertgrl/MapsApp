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


    const setDescription = (text) => {
        const newMission = { ...mission, description: text }
        setMission(newMission)
        console.log("newMissio", mission);
    }

    return (
        <CustomView >
            <View style={{ margin: 10, }}>
                <View style={{ margin: 10, alignItems: "center" }}>
                    <CustomText style={{ fontSize: 25 }}> {I18n.t("welcome")} {userInfo.username} </CustomText>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Picker
                        onValueChange={(value) => console.log(value)}
                        placeHolder={{
                            label: I18n.t("project"),
                            value: null
                        }}
                        items={[
                            { label: 'marvelApp', value: 'marvelApp', },
                            { label: 'TodoApp', value: 'TodoApp', },
                        ]}
                    />
                </View>

                <View>
                    <Picker
                        onValueChange={(value) => console.log(value)}
                        placeHolder={{
                            label: I18n.t("select_time"),
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
                    placeholder={I18n.t("enter_description")}
                    placeholderTextColor={"white"}
                    onChangeText={(text) => setDescription(text)}
                    value={mission.description}
                />

                <CustomButton
                    onPress={() => { }}
                    title={I18n.t("save_work")}
                />
            </View>

        </CustomView>

    )
}

export default Home


