import {Todo} from '../todo/model/todo.model';

import * as fromTodo from '../todo/store/todo.reducer';
import * as fromFilter from '../filter/filter.reducer';
import * as fromFilterAction from '../filter/filter.action';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';

export interface AppState {
  todos: Todo[];
  filter: fromFilterAction.filterValids;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filter: fromFilter.filterReducer
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
