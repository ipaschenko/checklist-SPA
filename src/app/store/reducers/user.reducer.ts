import {UserActionsTypes, UserActions} from '../actions/user.actions';
import { User } from '../models/user.model';

const defaultUser = new User(null, '', '');


export function userReducer(state = defaultUser, action: UserActions) {
  switch (action.type) {
    case UserActionsTypes.GET_USER: {
      console.log(action.payload);
      return { ...state, ...action.payload, loading: true};
    }

    case UserActionsTypes.AUTHENTICATED: {
      return { ...state, ...action.payload, loading: false};
    }

    case UserActionsTypes.NOT_AUTHENTICATED: {
      return { ...state, ...defaultUser, loading: false};
    }

    case UserActionsTypes.GOOGLE_LOGIN: {
      console.log('UserActionsTypes.GOOGLE_LOGIN');
      return { ...state, loading: true};
    }

    case UserActionsTypes.LOGOUT: {
      return { ...state, loading: true};
    }

    default: {
      return state;
    }
  }
}
