import React, { Component } from 'react'
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native'

import styles from './styles'

const TodoCell = ({
  todo,
  needsDivider,
  onClick
}) => {
  let textStyle = todo.completed ? styles.completedTodo : {}
  let divider = undefined
  if (needsDivider) {
    divider = <View style={styles.divider}></View>
  }
  return (
    <TouchableHighlight underlayColor='green' onPress={() => onClick()}>
      <View>
        <View style={styles.containerTodo}>
          <Text style={[textStyle, styles.todoTitle]}>{todo.title}</Text>
        </View>
        {divider}
      </View>
    </TouchableHighlight>
  )
}

export default TodoCell
