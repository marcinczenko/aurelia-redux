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
        this.styles = Object.assign({}, styles, { todo: {...styles.todoCompleted} });
      } else {
        this.styles = Object.assign({}, styles, { todo: {...styles.todoNotCompleted} });
      }
    }
}

const styles = {
  container: {
    display: 'flex',
    'flex-flow': 'row nowrap',
    'align-items': 'center',
    width: '100%'
  },
  buttonContainer: {
    flex: 1,
    display: 'block',
    margin: '0 10px'
  },
  button: {
    padding: '15px'
  },
  todoCompleted: {
    flex: 1,
    'text-decoration': 'line-through'
  },
  todoNotCompleted: {
    flex: 1,
    'text-decoration': 'none'
  },

};