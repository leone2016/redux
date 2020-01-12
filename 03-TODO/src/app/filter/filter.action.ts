import {Action} from '@ngrx/store';

export const SET_FILTRO = '[FIlter] Set Filter';
export type filterValids = 'todos'|'completados'|'pendientes';


export class SetFilterAction implements Action {
  readonly type = SET_FILTRO;
  constructor( public  filter: filterValids) {}
}

export type FilterAction = SetFilterAction;
