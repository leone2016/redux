import {Action} from '@ngrx/store';
import {Todo} from '../model/todo.model';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle All todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';


export class AgregarTodoAction implements  Action{
  readonly type = AGREGAR_TODO;
  constructor( public text: string){}
}
export class ToggleTodoAction implements  Action {
  readonly type = TOGGLE_TODO;
  constructor( public id: number ) {}
}
export class ToggleAllTodoAction implements  Action {
  readonly type = TOGGLE_ALL_TODO;
  constructor(  public completed: boolean  ) {}
}
export class EditarAction implements  Action {
  readonly type = EDITAR_TODO;
  constructor( public  id: number,  public text: string ) {}
}
export class BorrarTodoAction implements  Action {
  readonly type = BORRAR_TODO;
  constructor( public id: number ) {}
}

export type TodoActions  =
  AgregarTodoAction |
  ToggleTodoAction|
  EditarAction|
  BorrarTodoAction|
  ToggleAllTodoAction;
