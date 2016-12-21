import reducer from '../../app/todos/reducer'
import * as actions from '../../app/todos/actions'

describe('todos reducer', () => {
  it('should return inital state', () => {
    expect(reducer(undefined, {})).toEqual({
      items: []
    })
  })

  it('should add todo', () => {
    let action = actions.createTodo('Buy milk')
    let state = reducer(undefined, action)
    expect(state.items.length).toEqual(1)
    expect(state.items[0].title).toEqual('Buy milk')
  })

  it('should update todo', () => {
    let currentState = {
      items: [{
        uuid: '12345',
        title: 'Buy sugar',
        completed: false
      }]
    }
    let action = actions.updateTodo({
      uuid: '12345',
      title: 'Buy eggs',
      completed: true
    })
    let state = reducer(currentState, action)
    expect(state.items.length).toEqual(1)
    expect(state.items[0].title).toEqual('Buy eggs')
    expect(state.items[0].completed).toEqual(true)
  })
})
