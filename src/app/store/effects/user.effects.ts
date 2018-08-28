import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GetUser, UserActions } from '../actions/user.actions';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { EMPTY, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions<UserActions>,
              private afAuth: AngularFireAuth) {
  }

  @Effect()
  googleLogin$ = this.actions$.pipe(
    ofType('GOOGLE_LOGIN'),
    switchMap(() => fromPromise(this.googleLogin())),
    map((creds) => new UserActions.GetUser()),
    catchError((err) => {
      console.log('Err ', err);
      return EMPTY;
    }),
  );

  @Effect({dispatch: false})
  getUser$: Observable<Action> = this.actions$.pipe(
    ofType('GET_USER'),
  );

  private googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }
}

