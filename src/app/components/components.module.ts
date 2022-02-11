import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { HijoComponent } from './hijo/hijo.component';
import { MaterialModule } from './material.module';




@NgModule({
  declarations: [
    NavbarComponent,
    HijoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    HijoComponent
  ]
})
export class ComponentsModule { }
