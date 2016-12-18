import {
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  containerTodo: {
    height: 50,
    paddingLeft: 16,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  completedTodo: {
    textDecorationLine: 'line-through'
  },
  textInput: {
    height: 50,
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16
  }
})

export default styles
