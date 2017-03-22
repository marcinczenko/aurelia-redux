import { bindable } from 'aurelia-framework';

export class Todo {
    @bindable id;
    @bindable text;
    @bindable completed;
    @bindable toggle;

    constructor() {
      this.styles = styles;
    }

    toggleCompleted() {
      console.log('toggleCompleted');

      this.toggle(this.id);
    }

    completedChanged() {
      console.log('completedChanged');
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