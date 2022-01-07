import React from "react"
import { View, Text, StatusBar } from 'react-native'
import LoginScreen from './src/screens/LoginScreen'
import { Colors } from './src/constants'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.backGroundColor, }}>
      <StatusBar backgroundColor={Colors.backGroundColor} />
      <LoginScreen />
    </View>
  )
}

export default App
