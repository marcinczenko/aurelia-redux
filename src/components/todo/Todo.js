import { bindable } from 'aurelia-framework';

export class Todo {
    @bindable id;
    @bindable text;
    @bindable completed;
}