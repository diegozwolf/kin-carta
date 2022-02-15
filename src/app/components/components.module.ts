import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import { NavbarComponent } from './navbar/navbar.component';
import { HijoComponent } from './hijo/hijo.component';
import { UsersComponent } from './users/users.component';
import { CardsComponent } from './cards/cards.component';
import { QuestionsComponent } from './questions/questions.component';
import { UsertableComponent } from './usertable/usertable.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    NavbarComponent,
    HijoComponent,
    QuestionsComponent,
    UsersComponent,
    CardsComponent,
    UsertableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    Ng2SearchPipeModule

  ],
  exports: [
    MaterialModule,
    NavbarComponent,
    HijoComponent,
    QuestionsComponent,
    UsersComponent,
    CardsComponent,
    UsertableComponent,
    Ng2SearchPipeModule
  ]
})
export class ComponentsModule {}
