import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../reducers/app.reducers';
import {ToggleAllTodoAction} from './store/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  completado = false;
  constructor(private store: Store<AppState>) { }
  toggleAll(){
    this.completado = !this.completado;
    const action = new ToggleAllTodoAction(this.completado);
    this.store.dispatch(action);
  }
  ngOnInit() {
  }

}
