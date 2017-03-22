import {inject} from 'aurelia-framework';
import {AureliaProps} from 'services/props/AureliaProps';

class TodoListContainerProps extends AureliaProps {
  mapStateToProps(state) {
    return {
      todos: state.todos
    };
  }
 
  mapDispatchToProps() {
    return {
      todoToggle: (id) => {
        this.dispatch(this.actionCreators.todoToggle(id));
      },
      todoAdd: (id, text) => {
        this.dispatch(this.actionCreators.todoAdd(id, text));
      }
    };
  }
}
  
@inject(TodoListContainerProps)
export class TodoListContainer {
  constructor(props) {
    this.props = props;
  }

  detached() {
    this.props.unsubscribe();
  }
}
