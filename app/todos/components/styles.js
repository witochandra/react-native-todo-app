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
  },
  containerCompleted: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16
  },
  labelCompleted: {
    flex: 1
  },
  divider: {
    marginLeft: 16,
    marginRight: 0,
    height: 0.5,
    backgroundColor: 'gray'
  }
})

export default styles
