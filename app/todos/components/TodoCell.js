import React, { Component } from 'react'
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native'

import styles from './styles'

const TodoCell = ({
  todo
}) => {
  let textStyle = todo.completed ? styles.completedTodo : {}
  return (
    <TouchableHighlight underlayColor='green' onPress={() => console.log('test')}>
      <View style={styles.containerTodo}>
        <Text style={textStyle}>{todo.title}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default TodoCell
