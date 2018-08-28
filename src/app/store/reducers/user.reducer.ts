import {UserActionsTypes, UserActions} from '../actions/user.actions';

export const initialState = {
  user: null,
}

export function userReducer(state = initialState, action: UserActions) {
  switch (action.type) {
    case UserActionsTypes.GET_USER: {
      return { ...state, ...action.payload};
    }

    case UserActionsTypes.AUTHENTICATED: {
      return { ...state, ...action.payload};
    }

    case UserActionsTypes.NOT_AUTHENTICATED: {
      return { ...state, ...action.payload};
    }

    case UserActionsTypes.GOOGLE_LOGIN: {
      return { ...state, ...action.payload};
    }

    case UserActionsTypes.LOGOUT: {
      return { ...state, ...action.payload};
    }

    default: {
      return state;
    }
  }
}
