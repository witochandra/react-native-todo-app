import UUID from 'uuid-js'

import * as t from './actionTypes'

const initialState = {
  items: []
}

const todo = (state = undefined, action) => {
  switch (action.type) {
    case t.CREATE_TODO:
      return {
        uuid: UUID.create().toString(),
        title: action.payload.title,
        completed: false
      }
    case t.UPDATE_TODO:
      if (state.uuid != action.payload.uuid) {
        return state
      }
      return action.payload
    default:
      return state
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.CREATE_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          todo(undefined, action)
        ]
      }
    case t.UPDATE_TODO:
      return {
        ...state,
        items: state.items.map((item) => todo(item, action))
      }
    default:
      return state
  }
}

export default reducer
