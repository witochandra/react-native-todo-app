import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import styles from './styles'
import reducer from './reducer'

import { Todos } from './todos'

const store = createStore(reducer)

class TodoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Todos />
        </View>
      </Provider>
    )
  }
}

export default TodoApp
