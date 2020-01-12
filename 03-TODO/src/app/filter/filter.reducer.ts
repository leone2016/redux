import * as fromFilter from './filter.action';

const initialState: fromFilter.filterValids = 'todos';

export function filterReducer(state = initialState,
                              action: fromFilter.FilterAction): fromFilter.filterValids {
  switch (action.type) {
    case fromFilter.SET_FILTRO:
      return action.filter;
    default:
      return state;

  }
}
