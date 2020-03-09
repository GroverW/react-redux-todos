import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
  todos: []
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            description: action.payload.description,
            complete: false,
            id: uuid()
          }
        ]
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };

    case "TOGGLE_COMPLETION":
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo)
      };

    default:
      return state;
  }
}

export default rootReducer;