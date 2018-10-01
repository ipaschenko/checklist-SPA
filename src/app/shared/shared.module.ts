import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';

const SHARED_INSTANCES = [HeaderComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SHARED_INSTANCES,
    AuthComponent,
  ],
  exports: [
    ...SHARED_INSTANCES,
  ],
})

export class SharedModule {}
