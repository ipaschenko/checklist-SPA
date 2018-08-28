import {Action} from '@ngrx/store';

export const enum UserActionsTypes {
  GET_USER = '[Auth] Get user',
  AUTHENTICATED = '[Auth] Authenticated',
  NOT_AUTHENTICATED = '[Auth] Not Authenticated',
  GOOGLE_LOGIN = '[Auth] Google Login',
  LOGOUT = '[Auth] Logout',
}

export class GetUser implements Action {
  readonly type = UserActionsTypes.GET_USER;
  constructor(public payload?: any) {}
}

export class Authenticated implements Action {
  readonly type = UserActionsTypes.AUTHENTICATED;
  constructor(public payload?: any) {}
}

export class NotAuthenticated implements Action {
  readonly type = UserActionsTypes.NOT_AUTHENTICATED;
  constructor(public payload?: any) {}
}

export class GoogleLogin implements Action {
  readonly type = UserActionsTypes.GOOGLE_LOGIN;
  constructor(public payload?: any) {}
}

export class Logout implements Action {
  readonly type = UserActionsTypes.LOGOUT;
  constructor(public payload?: any) {}
}

export type UserActions = GetUser | Authenticated | NotAuthenticated | GoogleLogin | Logout;
