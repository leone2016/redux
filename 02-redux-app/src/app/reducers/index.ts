import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {contadorReducer} from '../contador/contador.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  contador: contadorReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
