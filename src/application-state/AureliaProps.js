import {inject} from 'aurelia-framework';

import {ApplicationStateCoordinator} from './ApplicationStateCoordinator';
import {ActionCreators} from './ActionCreators';

@inject(ApplicationStateCoordinator, ActionCreators)
export class AureliaProps {
  constructor(applicationStateCoordinator, actionCreators) {
    this.applicationStateCoordinator = applicationStateCoordinator;
    this.actionCreators = actionCreators;
    this.observable = this.applicationStateCoordinator.observable((state) => {
        return this.mapStateToProps(state);
    });
    this.subscription = this.observable.subscribe((props) => {
      Object.assign(this, props);
    });
    Object.assign(this, this.mapDispatchToProps());
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }
}
