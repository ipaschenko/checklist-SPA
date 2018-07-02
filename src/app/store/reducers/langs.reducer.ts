import {Lang} from '../models/lang.model';
import * as langsAction from '../actions/langs.actions';

export interface State {
  langs: Lang[];
  selected: number;
}

export const initialState: State = {
  langs: [{
      id: 'en',
      title: 'English',
    }, {
      id: 'ua',
      title: 'Ukrainian'
    }, {
      id: 'ru',
      title: 'Russian'
    }
  ],
  selected: null
}

export function reducer(state = initialState, action: langsAction.Action): State {
  switch (action.type) {
    case langsAction.SELECT:
      console.log(action.type, action.payload);
      return state;
    case langsAction.LIST:
      console.log(action.type, action.payload);
      return state;
    default:
      return state;
  }
}


export const slateLangs = (state: State) => state.langs;
export const slateSelected = (state: State) => state.selected;
