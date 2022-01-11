import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../constants'


const CheckBox = () => {

    const [isChecked, setIsChecked] = useState(false)

    const handleActivity = () => {
        setIsChecked(check => !check)
        console.log({ isChecked });
    }

    return (
        <View style={styles.containerStyle}>
            <View style={styles.iconStyle}>
                <TouchableOpacity onPress={() => handleActivity()}>
                    {isChecked ?
                        <FontAwesome5 name={"check"} size={15} color="#fff" />
                        : <FontAwesome5 name={"check"} size={15} color={Colors.backGroundColor} />}
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ color: "#fff" }}>Beni Hatırla</Text>

            </View>

        </View>
    )
}

export default CheckBox

const styles = StyleSheet.create({
    iconStyle: {
        borderWidth: 1,
        width: 25,
        height: 25,
        borderColor: "#fff",
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    containerStyle: { marginVertical: 20, flexDirection: "row", alignItems: "center" }
})
