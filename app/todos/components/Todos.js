import React, { Component } from 'react'
import {
  Text,
  View,
  ListView
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import TodoCell from './TodoCell'
import styles from './styles'

class Todos extends Component {

  constructor() {
    super()
  }

  componentWillMount() {
    Actions.refresh({
      title: 'Todos',
      rightTitle: 'Create',
      onRight: () => {
        Actions.pageCreateTodo()
      }
    })
  }

  render() {
    let todos = this.props.todos
    const ds = new ListView.DataSource({rowHasChanged: (todo1, todo2) => todo1.title !== todo2.title})
    return (
      <ListView
        style={styles.container}
        dataSource={ds.cloneWithRows(todos)}
        renderRow={(todo) => <TodoCell todo={todo}/>}
      />
    )
  }
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
