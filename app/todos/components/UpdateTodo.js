import React, { Component } from 'react'
import {
  Alert,
  Switch,
  Text,
  TextInput,
  View
} from 'react-native'

import { connect } from 'react-redux'

import { Actions } from 'react-native-router-flux'

import styles from './styles'
import * as actions from '../actions'

class UpdateTodo extends Component {

  constructor() {
    super()
    this.save = this.save.bind(this)
  }

  componentWillMount() {
    Actions.refresh({
      title: 'Update Todo',
      rightTitle: 'Save',
      onRight: this.save
    })
  }

  render() {
    if (this.state == null) {
      this.state = {
        todo: this.props.todo
      }
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder='Title'
          onChangeText={(text) => {
            let todo = this.state.todo
            this.setState({
              todo: {
                ...todo,
                title: text
              }
            })
          }}
          value={this.state.todo.title}
        />
        <View style={styles.containerCompleted}>
          <Text style={styles.labelCompleted}>Completed</Text>
          <Switch
            value={this.state.todo.completed}
            onValueChange={(value) => {
              let todo = this.state.todo
              this.setState({
                todo: {
                  ...todo,
                  completed: value
                }
              })
            }}/>
        </View>
      </View>
    )
  }

  save() {
    let todo = this.state.todo
    if (todo.title === undefined || todo.title.length == 0) {
      Alert.alert('No title', 'Please type Todo title')
      return
    }
    let dispatch = this.props.dispatch
    dispatch(actions.updateTodo(todo))
    Actions.pop()
  }
}

UpdateTodo = connect()(UpdateTodo)

export default UpdateTodo
