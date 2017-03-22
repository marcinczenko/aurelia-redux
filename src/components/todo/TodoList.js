import { bindable, observable } from 'aurelia-framework';

export class TodoList {
  @bindable props;

  propsChanged() {
    console.log('propsChanged=', this.props);
  }
}
