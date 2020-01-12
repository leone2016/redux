import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/todo.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers/app.reducers';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      console.log(state);
      this.todos = state.todos;
    });
  }

}
