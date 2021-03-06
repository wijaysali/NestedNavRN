// App.js
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import Animated, { Easing } from 'react-native-reanimated';

import Login from './src/components/Login'
import AuthLoading from './src/components/AuthLoading'
import Home from './src/components/Home'
import Settings from './src/components/Settings'
import ProfileSettings from './src/components/ProfileSettings'
import { Monday, Tuesday, Wednesday } from './src/components/TabScreens'

const WeekDays = createBottomTabNavigator(
  {
    Monday,
    Tuesday,
    Wednesday,
  }
)

const AllSettings = createStackNavigator(
  {
    Settings,
    ProfileSettings,
  }
)

const DrawerNavigator = createDrawerNavigator(
  {
    Home, 
    AllSettings,
    WeekDays, // add bottom navigator here
  },
  {
    initialRouteName: 'Home',
  },
)

const switchNavigator = createSwitchNavigator(
  {
    AuthLoading,
    Login,
    DrawerNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  },
)

const AppNavigator = createAppContainer(switchNavigator)

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App