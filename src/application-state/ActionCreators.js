export class ActionCreators {
  todoAdd(id, text) {
    return {
      type: 'TODO_ADD',
      id,
      text
    };
  } 

  todoToggle(id) {
    return {
      type: 'TODO_TOGGLE',
      id
    };
  }
}
