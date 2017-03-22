import { bindable, observable } from 'aurelia-framework';

export class TodoList {
  @bindable props;

  @observable todoText;

  constructor() {
    this.styles = styles;
    this.buttonDisabled = 'disabled';
  }

  propsChanged() {
    console.log('propsChanged=', this.props);
  }

  todoTextChanged() {
    console.log('this.todoText.trim().lenght', this.todoText.trim().length)
    if (this.todoText.trim().length === 0) {
      this.buttonDisabled = 'disabled';
    } else {
      this.buttonDisabled = '';
    }
  }

  addTodo() {
    this.props.todoAdd(this.props.todos.length, this.todoText);
    this.todoText = '';
  }
}

const styles = {
  container: {
    margin: '10px',
    padding: 0,
    width: '600px'
  },

  todoList: {
    display: 'flex',
    'flex-flow': 'column nowrap'
  },

  inputGroup: {
    display: 'flex',
    margin: '10px 0'
  },

  button: {
    'margin-left': '15px',
    'padding': '10px'
  }
}
