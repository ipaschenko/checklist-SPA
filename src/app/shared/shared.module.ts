import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

const SHARED_INSTANCES = [HeaderComponent];

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
  ],
  declarations: [
    SHARED_INSTANCES,
    AuthComponent,
  ],
  exports: [
    ...SHARED_INSTANCES,
    DragDropModule,
  ],
})

export class SharedModule {}
