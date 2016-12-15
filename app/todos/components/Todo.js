import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import styles from './styles'

const Todo = ({
  todo
}) => {
  return (
    <View style={styles.containerTodo}>
      <Text>{todo.title}</Text>
    </View>
  )
}

export default Todo
