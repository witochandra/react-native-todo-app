import React, { Component } from 'react'
import {
  ListView,
  Text,
  View
} from 'react-native'

import { connect } from 'react-redux'

import Todo from './Todo'
import styles from './styles'

const dataSource = new ListView.DataSource({
    rowHasChanged: (todo1, todo2) => {
      if (todo1.title != todo2.title) return false
      if (todo1.completed != todo2.completed) return false
      return true
    }
  }
)

let Todos = ({
  todos
}) => {
  let ds = dataSource.cloneWithRows(todos)
  console.log(ds)
  return (
    <View style={{flex: 1}}>
      <ListView
        style={styles.container}
        dataSource={ds}
        renderRow={(todo) => <Todo todo={todo}/>}
      />
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.items
  }
}

Todos = connect(
  mapStateToProps
)(Todos)

export default Todos
