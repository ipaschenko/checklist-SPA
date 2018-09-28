import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { DataService } from './shared/services/data.service';
import { Store } from '@ngrx/store';

import * as userActions from './store/actions/user.actions';
import {AppState} from './store/reducers';
import {GetUser} from './store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user$ = this.store$.select('user');

  // TODO RootState
  constructor(public afAuth: AngularFireAuth, private dataService: DataService, private store$: Store<AppState>) {
  }

  ngOnInit() {
    this.store$.dispatch(new userActions.GetUser());
    console.log(1);
  }

  // googleLogin() {
  //   this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  //   console.log('afAuth.user ', this.afAuth.user);
  // }

  googleLogin() {
    this.store$.dispatch(new userActions.GoogleLogin());
    // this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    // console.log('afAuth.user ', this.afAuth.user);
  }

  logout() {
    this.store$.dispatch(new userActions.Logout());
    // this.afAuth.auth.signOut();
  }
}
