import { createStore } from 'redux';
import Rx from '@reactivex/rxjs';

import { applicationReducer } from 'application-state/Reducers';

export class ApplicationStateCoordinator {

  constructor() {
    this.reduxStore = createStore(applicationReducer);
  }

  observable(select) {
    return Rx.Observable.create((observer) => {
      let currentState;
      let dispose = this.reduxStore.subscribe(() => {
        let nextState = select(this.reduxStore.getState());
        if (nextState !== currentState) {
          observer.next(nextState);
        }
      });
      observer.next(select(this.reduxStore.getState()));
      return dispose;
    });
  }

  dispatch(action) {
    this.reduxStore.dispatch(action);
  }
}
