import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers';
import * as userActions from '../../../store/actions/user.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user$ = this.store$.select('user');

  constructor(private store$: Store<AppState>) { }

  ngOnInit() {
    this.store$.dispatch(new userActions.GetUser());
  }

  googleLogin() {
    this.store$.dispatch(new userActions.GoogleLogin());
  }

  logout() {
    this.store$.dispatch(new userActions.Logout());
  }

}
