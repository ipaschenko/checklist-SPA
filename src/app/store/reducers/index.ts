import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

import * as fromLangs from './langs.reducer';

export interface State {
  langs: fromLangs.State;
}

export const reducers = {
  langs: fromLangs.reducer
};
