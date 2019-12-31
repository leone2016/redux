import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reduces';
import {DividirAction, MultiplicarAction} from '../contador.action';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  contador: number;
  constructor( private store: Store<AppState>) {
    this.store.select('contador').subscribe( state =>{
      this.contador = state;
    })
  }
  multiplicar(){
    // hay que modificar el state, hay que hacer un dispatch para modificar el state
    const action = new MultiplicarAction(2);
    this.store.dispatch(action);
  }
  dividir(){
    // hay que modificar el state, hay que hacer un dispatch para modificar el state
    const action = new DividirAction(5);
    this.store.dispatch(action);
  }
  ngOnInit() {
  }

}
