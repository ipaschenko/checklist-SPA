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

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions<fromUser.UserActions>,
              private afAuth: AngularFireAuth) {
  }

  @Effect({dispatch: false})
  getUser$ = this.actions$.pipe(
    ofType('GET_USER'),
    tap(() => console.log(111)),
    map((action: fromUser.GetUser) => action.payload),
    switchMap((payload) => this.afAuth.authState),
    delay(1000),
    map((userData: IUser) => {
      if (userData) {
        const user = new User(userData.uid, userData.displayName);
        return new fromUser.Authenticated(user);
      } else {
        return new fromUser.NotAuthenticated();
      }
    }),
  );

  @Effect()
  googleLogin$ = this.actions$.pipe(
    ofType('GOOGLE_LOGIN'),
    switchMap(() => fromPromise(this.googleLogin())),
    map((creds) => new fromUser.GetUser()),
    catchError((err) => {
      console.log('Err ', err);
      return EMPTY;
    }),
  );

  private googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }
}

