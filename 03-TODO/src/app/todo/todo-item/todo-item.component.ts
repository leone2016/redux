import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../model/todo.model';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers/app.reducers';
import {BorrarTodoAction, EditarAction, ToggleTodoAction} from '../store/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('txtInputFisico', {static: true}) txtInputFisico: ElementRef;
  chkField: FormControl;
  txtInput: FormControl;
  editando: boolean;
  constructor(private store: Store<AppState>) { }

  editar() {
    this.editando = true;
    setTimeout( () => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }
  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.todo.texto) {
      return;
    }
    const action = new EditarAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(action);
  }
  borrar(){
    const action = new BorrarTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkField.valueChanges.subscribe((valor) => {
        const action = new ToggleTodoAction(this.todo.id);
        this.store.dispatch(action);
    });

  }

}
