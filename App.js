import React from "react"
import { View, Text, StatusBar } from 'react-native'
import LoginScreen from './src/screens/LoginScreen'
import { Colors } from './src/constants'
import RootNavigation from "./src/navigation/RootNavigation"

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.backGroundColor, }}>
      <StatusBar backgroundColor={Colors.backGroundColor} />
      <RootNavigation />

    </View>
  )
}

export default App
