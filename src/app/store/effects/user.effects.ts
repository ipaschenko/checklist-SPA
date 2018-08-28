import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {UserActions} from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions<UserActions>) {}
}
