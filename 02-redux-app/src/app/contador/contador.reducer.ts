import * as fromContador from './contador.action';

export function contadorReducer(state: number = 10, action: fromContador.actionsContador) {
  switch (action.type) {
    case fromContador.INCREMENTAR:
      return state + 1;
    case fromContador.DECREMENTAR:
      return state - 1;
    case fromContador.MULTIPLICAR:
      return state * action.payload;
    case fromContador.DIVIDR:
      return state / action.payload;
    case fromContador.REINICIAR:
      return 0;
    default:
      return state;
  }
}
