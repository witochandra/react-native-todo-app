import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  List
} from 'native-base'

import Icon from 'react-native-vector-icons/MaterialIcons'

import { connect } from 'react-redux'

import TodoCell from './TodoCell'
import styles from './styles'

let Todos = ({
  todos
}) => {
  return (
    <Container style={styles.container}>
      <Header iconRight='true'>
        <Title>Todos</Title>
        <Button transparent>
          <Icon name='add' size={24} />
        </Button>
      </Header>
      <Content>
        <List
          style={{paddingTop: 5}}
          dataArray={todos}
          renderRow={(todo) => <TodoCell todo={todo}/>}
        />
      </Content>
    </Container>
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
