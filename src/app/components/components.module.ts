import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import { NavbarComponent } from './navbar/navbar.component';
import { HijoComponent } from './hijo/hijo.component';
import { QuestionsComponent } from './questions/questions.component';
import { UsersComponent } from './users/users.component';




@NgModule({
  declarations: [
    NavbarComponent,
    HijoComponent,
    QuestionsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports: [
    MaterialModule,
    NavbarComponent,
    HijoComponent,
    QuestionsComponent,
    UsersComponent
  ]
})
export class ComponentsModule {}
