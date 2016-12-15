import * as t from './actionTypes'

const initialState = {
  items: [{
    title: 'Buy 5 Eggs',
    completed: false
  }]
}

const todo = (state = undefined, action) => {
  switch (action.type) {
    case t.CREATE_TODO:
      return {
        title: action.payload.title,
        completed: false
      }
    default:
      return state
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.CREATE_TODO:
      return [
        ...state.todos,
        todo(undefined, action)
      ]
    default:
      return state
  }
}

export default reducer
