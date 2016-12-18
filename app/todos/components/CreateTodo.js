import React, { Component } from 'react'
import {
  Alert,
  TextInput,
  View
} from 'react-native'

import { connect } from 'react-redux'

import { Actions } from 'react-native-router-flux'

import styles from './styles'
import * as actions from '../actions'

class CreateTodo extends Component {

  constructor() {
    super()
    this.save = this.save.bind(this)
    this.state = {
      title: ''
    }
  }

  componentWillMount() {
    Actions.refresh({
      title: 'Create Todo',
      rightTitle: 'Save',
      onRight: this.save
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder='Title'
          onChangeText={(text) => this.setState({title: text})}
        />
      </View>
    )
  }

  save() {
    let title = this.state.title
    if (title === undefined || title.length == 0) {
      Alert.alert('No title', 'Please type Todo title')
      return
    }
    let dispatch = this.props.dispatch
    dispatch(actions.createTodo(title))
    Actions.pop()
  }
}
CreateTodo = connect()(CreateTodo)
export default CreateTodo
