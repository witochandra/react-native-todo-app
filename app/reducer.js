import { combineReducers } from 'redux'

import { reducer as todos } from './todos'

const reducer = combineReducers({
  todos: todos
})

export default reducer
