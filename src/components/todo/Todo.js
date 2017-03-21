import { bindable } from 'aurelia-framework';

export class Todo {
    @bindable id;
    @bindable text;
    @bindable completed;

    constructor() {
      this.styles = styles;
    }

    toggleCompleted() {
      console.log('toggleCompleted');

      this.completed = !this.completed;

      this.updateStyle();
    }

    updateStyle() {
      if (this.completed) {
        this.styles = Object.assign({}, styles, { todo: styles.todoCompleted });
      } else {
        this.styles = Object.assign({}, styles, { todo: styles.todoNotCompleted });
      }
    }
}

const styles = {
  todoCompleted: {
    'text-decoration': 'line-through'
  },
  todoNotCompleted: {
    'text-decoration': 'none'
  }
};