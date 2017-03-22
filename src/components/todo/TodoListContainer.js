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
        this.applicationStateCoordinator.dispatch(this.actionCreators.todoToggle(id));
      },
      todoAdd: (id, text) => {
        this.applicationStateCoordinator.dispatch(this.actionCreators.todoAdd(id, text));
      }
    };
  }
}
  
@inject(TodoListContainerProps)
export class TodoListContainer {
  constructor(props) {
    this.props = props;
    console.log('props=', this.props);

    setTimeout( () => {
      this.props.todoAdd(1, 'Clean up your desk');
      this.props.todoAdd(2, 'Transfer money to Wilma');
    }, 3000);
  }
}
