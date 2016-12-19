import React, { Component } from 'react'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux'
import createLogger from 'redux-logger';

import styles from './styles'
import reducer from './reducer'

import { Todos, CreateTodo } from './todos'

const logger = createLogger()
const store = createStore(
  reducer,
  applyMiddleware(logger)
)

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
