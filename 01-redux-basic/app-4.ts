import {createStore, Store} from "redux";
import {contadorReducer} from "./contador/contador.reducer";
import {incrementadorAction} from "./contador/contador.actions";


const store: Store = createStore( contadorReducer )

store.subscribe( ()=> {
    console.log('store', store.getState());
})

store.dispatch( incrementadorAction);
store.dispatch( incrementadorAction);
store.dispatch( incrementadorAction);
store.dispatch( incrementadorAction);
