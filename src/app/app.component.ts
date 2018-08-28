import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { DataService } from './shared/services/data.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // TODO RootState
  constructor(public afAuth: AngularFireAuth, private dataService: DataService, private store: Store<any>) {
  }

  ngOnInit() {
    this.dataService.getData().subscribe((res) => console.log(res));
  }

  login() {
    this.store.dispatch( new )
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    console.log('afAuth.user ', this.afAuth.user);
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
