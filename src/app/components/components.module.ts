import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import { PagesModule } from '../pages/pages.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HijoComponent } from './hijo/hijo.component';




@NgModule({
  declarations: [
    NavbarComponent,
    HijoComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    NavbarComponent,
    HijoComponent,
    SidenavComponent
  ]
})
export class ComponentsModule {}
