import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import { NavbarComponent } from './navbar/navbar.component';
import { HijoComponent } from './hijo/hijo.component';




@NgModule({
  declarations: [
    NavbarComponent,
    HijoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports: [
    MaterialModule,
    NavbarComponent,
    HijoComponent
  ]
})
export class ComponentsModule {}
