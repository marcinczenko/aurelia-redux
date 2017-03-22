import { bindable, observable } from 'aurelia-framework';

export class TodoList {
  @bindable props;

  todoText;

  propsChanged() {
    console.log('propsChanged=', this.props);
  }

  addTodo() {
    this.props.todoAdd(this.props.todos.length, this.todoText);
    this.todoText = '';
  }
}
