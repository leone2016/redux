import * as fromTodo from './todo.actions';
import {Todo} from '../model/todo.model';

// inicia con datos
const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar al mundo');
todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: fromTodo.TodoActions): Todo[]  {
  switch (action.type) {
    /**
     * AGREGAR TODO
     */
    case fromTodo.AGREGAR_TODO:
      const todo = new Todo( action.text );
      // state.push( todo ); esto funciona para regresar el arreglo de TODO, pero de esta manera jamas
      //  se podra rastrear los cambios en las acciones

      // de esta forma se clona el estado actual
      return [ ...state, todo ]; // NUEVO ARREGLO
    /**
     * TOGGLE
     */
    case fromTodo.TOGGLE_TODO:
      // hay que regrasar nuevos estado, NO hay que mutarlos
      return state.map( todoEdit => { // map regresa un NUEVO arreglo
        if (todoEdit.id === action.id ) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        } else {
          return todoEdit;
        }
      });
    /**
     * TOGGLE ALl
     */
    case fromTodo.TOGGLE_ALL_TODO:
      // hay que regrasar nuevos estado, NO hay que mutarlos
      return state.map( todoEdit => { // map regresa un NUEVO arreglo
          return {
            ...todoEdit,
            completado: action.completed
          };
      });
    /**
     * EDITAR
     */
    case fromTodo.EDITAR_TODO:
      // hay que regrasar nuevos estado, NO hay que mutarlos
      return state.map( todoEdit => { // map regresa un NUEVO arreglo
        if (todoEdit.id === action.id ) {
          return {
            ...todoEdit,
            texto: action.text
          };
        } else {
          return todoEdit;
        }
      });
    /**
     * EDITAR
     */
    case fromTodo.BORRAR_TODO:
      return state.filter( todoDelete => todoDelete.id !== action.id);
    /**
     * DEFAULT
     */
    default:
      return  state;

  }
}
