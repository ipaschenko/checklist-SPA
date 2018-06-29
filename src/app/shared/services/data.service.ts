import { Injectable } from '@angular/core';
import { mockData } from '../mock';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})

export class DataService {
  mockData = mockData;

  getData() {
    return of(this.mockData);
  }
}
