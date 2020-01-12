import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filter/filter.action';
import {Todo} from '../model/todo.model';
import {AppState} from '../../reducers/app.reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  pendientes: number;
  filterValids: fromFilter.filterValids[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFilter.filterValids;
  constructor(private store: Store<AppState> ) { }
  ngOnInit() {
    this.store.subscribe( state => {
      this.contarPendiente(state.todos)
      this.filtroActual = state.filter;
    });
  }
  contarPendiente(todos: Todo[]){
    this.pendientes = todos.filter( todo => !todo.completado).length;
  }
  cambiarFiltro(filtro: fromFilter.filterValids) {
   const accion = new fromFilter.SetFilterAction(filtro);
   this.store.dispatch(accion);
  }
}
