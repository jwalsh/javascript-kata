// http://redux.js.org/docs/basics/Reducers.html

let initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}

function todoApp(state = initialState, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return Object.assign({}, state, {
      visibilityFilter: action.filter
    })
  case ADD_TODO:
    return Object.assign({}, state, {
      todos: [
          ...state.todos,
        {
          text: action.text,
          completed: false
        }
      ]
    })
  default:
    return state
  }
}

// todayApp(,{'action'})
