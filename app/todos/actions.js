import * as t from './actionTypes'

export const createTodo = (title) => {
  return {
    type: t.CREATE_TODO,
    payload: {
      title: title
    }
  }
}

export const updateTodo = (todo) => {
  return {
    type: t.UPDATE_TODO,
    payload: todo
  }
}
