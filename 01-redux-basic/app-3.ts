import {Action, Reducer} from "./ngrx-fake/ngrx";
import {contadorReducer} from "./contador/contador.reducer";
import {incrementadorAction} from "./contador/contador.actions";

class Store<T>{
    private state: T;

    constructor( private reducer: Reducer<T>,
                 state: T ){
        this.state = state;

    }

    //para acceder a la propiedad privada state
    getState(){
        return this.state;
    }

    dispatch( action: Action){
        this.state = this.reducer(this.state, action);
    }
}


const store = new Store( contadorReducer, 10 )

console.log(store.getState());

store.dispatch( incrementadorAction);
console.log(store.getState());
