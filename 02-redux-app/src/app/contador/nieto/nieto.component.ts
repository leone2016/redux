import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reduces';
import {ReiniciarAction} from '../contador.action';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
  contador: number;
  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe( state =>{
      this.contador = state;
    })
  }
  reset(){
    const action = new ReiniciarAction();
    this.store.dispatch(action);
  }
  ngOnInit() {
  }

}
