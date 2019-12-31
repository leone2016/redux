import {Action} from '@ngrx/store';

export const INCREMENTAR = '[CONTADOR] Incrementar';
export const DECREMENTAR = '[CONTADOR] Decrementar';
export const MULTIPLICAR = '[CONTADOR] Multiplicar';
export const DIVIDR = '[CONTADOR] Dividir';
export const REINICIAR = '[CONTADOR] Reset';

export class IncrementarAction implements Action{
    readonly type = INCREMENTAR;
}


export class DecrementarAction implements Action{
  readonly type = DECREMENTAR;
}

export class MultiplicarAction implements Action{
  readonly type = MULTIPLICAR;
  constructor( public payload: number){}
}

export class DividirAction implements Action{
  readonly type = DIVIDR;
  constructor( public payload: number){}
}

export class ReiniciarAction implements Action{
  readonly type = REINICIAR;
}

export type actionsContador = IncrementarAction |
                      DecrementarAction |
                      MultiplicarAction |
                      DividirAction |
                      ReiniciarAction;
