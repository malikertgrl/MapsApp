import React from "react"
import { View, Text, StatusBar } from 'react-native'
import LoginScreen from './src/screens/LoginScreen'
import { Colors } from './src/constants'
import RootNavigation from "./src/navigation/RootNavigation"
import { Provider } from "react-redux"
import { Store } from "./src/redux/Store"

const App = () => {
  return (
    <Provider store={Store}>
      <View style={{ flex: 1, backgroundColor: Colors.backGroundColor, }}>
        <StatusBar backgroundColor={Colors.backGroundColor} />
        <RootNavigation />

      </View>
    </Provider>

  )
}

export default App
