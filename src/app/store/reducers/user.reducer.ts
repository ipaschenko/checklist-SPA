import {UserActionsTypes, UserActions} from '../actions/user.actions';

export const initialState = {
  user: null,
}

export function userReducer(state = initialState, action: UserActions) {
  switch (action.type) {
    case UserActionsTypes.GET_USER: {
      return { ...state, loading: true};
    }

    case UserActionsTypes.AUTHENTICATED: {
      return { ...state, ...action.payload, loading: false};
    }

    case UserActionsTypes.NOT_AUTHENTICATED: {
      return { ...state, ...action.payload, loading: false};
    }

    case UserActionsTypes.GOOGLE_LOGIN: {
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
