import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ClickOutsideDirective } from './divectives/click-outside.directive';
import { BoardComponent } from './components/board/board.component';

const SHARED_INSTANCES = [
  AuthComponent,
  BoardComponent,
  HeaderComponent,
];

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
  ],
  declarations: [
    SHARED_INSTANCES,
    ClickOutsideDirective,
  ],
  exports: [
    ...SHARED_INSTANCES,
    DragDropModule,
  ],
})

export class SharedModule {}
