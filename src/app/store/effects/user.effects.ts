import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromUser from '../actions/user.actions';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { EMPTY, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import {catchError, delay, map, switchMap, tap} from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';
import {IUser, User} from '../models/user.model';
import { UserActionsTypes } from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions<fromUser.UserActions>,
              private afAuth: AngularFireAuth) {
  }

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType(UserActionsTypes.GET_USER),
    map((action: fromUser.GetUser) => action.payload),
    switchMap((payload) => this.afAuth.authState),
    map((userData: IUser) => {
      if (userData) {
        const user = new User(userData.uid, userData.displayName, userData.photoURL);
        return new fromUser.Authenticated(user);
      } else {
        return new fromUser.NotAuthenticated();
      }
    }),
  );

  @Effect()
  googleLogin$ = this.actions$.pipe(
    ofType(UserActionsTypes.GOOGLE_LOGIN),
    switchMap(() => fromPromise(this.googleLogin())),
    tap((someData) => console.log(someData)),
    map((creds) => new fromUser.GetUser()),
    catchError((err) => {
      console.log('Err ', err);
      return EMPTY;
    }),
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(UserActionsTypes.LOGOUT),
    switchMap((payload) => this.afAuth.auth.signOut()),
    map(() => new fromUser.NotAuthenticated()),
  );

  private googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }
}

