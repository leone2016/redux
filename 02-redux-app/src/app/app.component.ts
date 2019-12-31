import { Component } from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {DecrementarAction, IncrementarAction} from './contador/contador.action';
import {AppState} from './app.reduces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  contador: number;
  constructor( private store: Store<AppState> ) {
    this.store.select('contador').subscribe( state =>{
      this.contador = state;
    });
    this.contador = 10;
  }
  incrementar() {
    const action = new IncrementarAction();
    this.store.dispatch(action);
    // this.contador++;
  }
  decrementar() {
    const action = new DecrementarAction();
    this.store.dispatch(action);
    // this.contador--;
  }
}
