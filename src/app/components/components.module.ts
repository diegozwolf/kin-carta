import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import { NavbarComponent } from './navbar/navbar.component';
import { HijoComponent } from './hijo/hijo.component';
import { UsersComponent } from './users/users.component';
import { CardsComponent } from './cards/cards.component';
import { QuestionsComponent } from './questions/questions.component';




@NgModule({
  declarations: [
    NavbarComponent,
    HijoComponent,
    QuestionsComponent,
    UsersComponent,
    CardsComponent
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
    UsersComponent,
    CardsComponent
  ]
})
export class ComponentsModule {}
