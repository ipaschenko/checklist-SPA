import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  // list1 = [
  //   'Item 0',
  //   'Item 1',
  //   'Item 2',
  //   'Item 3',
  //   'Item 4',
  // ];
  //
  // list2 = [
  //   'Item 5',
  //   'Item 6',
  //   'Item 7',
  // ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    console.log(this.dataService.getData());
    // this.dataService.getData().subscribe((res) => console.log(res));
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  // }
}
