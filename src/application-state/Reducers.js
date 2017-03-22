import { combineReducers } from 'redux';

const todo = (state, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TODO_TOGGLE':
      if (state.id !== action.id) {
        return state;
      }

      return { 
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return [ ...state, todo(state, action) ];
    case 'TODO_TOGGLE':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}

export const applicationReducer = combineReducers({
  todos
});
