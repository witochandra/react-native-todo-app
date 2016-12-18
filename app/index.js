import React, { Component } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux'

import styles from './styles'
import reducer from './reducer'

import { Todos, CreateTodo } from './todos'

const store = createStore(reducer)

class TodoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router sceneStyle={styles.sceneStyle}>
          <Scene key='root'>
            <Scene key='pageTodos' component={Todos} initial={true} />
            <Scene key='pageCreateTodo' component={CreateTodo} />
          </Scene>
        </Router>
      </Provider>
    )
  }
}

export default TodoApp
