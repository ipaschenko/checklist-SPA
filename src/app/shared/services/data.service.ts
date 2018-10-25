import { Injectable } from '@angular/core';
import { mockData } from '../mock';
import { of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({providedIn: 'root'})

export class DataService {
  mockData = mockData;

  constructor(private db: AngularFirestore) {}

  getData(): any {
    return this.db.collection('/test-list').valueChanges();
    // return of(this.mockData);
  }
}
