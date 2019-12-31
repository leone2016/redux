import {Action} from "./ngrx-fake/ngrx";
import {
    decrementarAction,
    dividirAction,
    incrementadorAction,
    multiplicarAction,
    resetAction
} from "./contador/contador.actions";
import {contadorReducer} from "./contador/contador.reducer";



//usar el reducer
console.log( contadorReducer(10, incrementadorAction));

console.log( contadorReducer(10, decrementarAction));

console.log( contadorReducer(10, multiplicarAction));

console.log( contadorReducer(10, dividirAction));

console.log( contadorReducer(0, resetAction));
