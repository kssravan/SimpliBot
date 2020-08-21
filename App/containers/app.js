// import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from '@app/containers/root-container'
import createStore from '../redux'
import { config } from '@app/config'
const { useReactotron } = config()

// create our store
export const store = createStore()

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default useReactotron
  ? console.tron.overlay(App)
  : App
