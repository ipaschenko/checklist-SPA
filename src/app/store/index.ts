import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';

import * as fromLangs from './reducers/langs.reducer';

export interface State {
  langs: fromLangs.State;
}

export const reducers = {
  langs: fromLangs.reducer
};
