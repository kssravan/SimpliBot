// import DebugConfig from '../Config/DebugConfig'
import React, { Component, useEffect } from 'react'
import { Provider } from 'react-redux'
import RootContainer from '@app/containers/root-container'
import createStore from '../redux'
import { config } from '@app/config'
const { useReactotron } = config()
import SplashScreen from 'react-native-splash-screen' 

// create our store
export const store = createStore()

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  },[])

  return <Provider store={store}>
    <RootContainer />
  </Provider>
}

// allow reactotron overlay for fast design in dev mode
export default useReactotron
  ? console.tron.overlay(App)
  : App
