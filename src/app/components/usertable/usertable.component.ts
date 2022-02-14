import { Component, OnInit } from '@angular/core';
import { share } from 'rxjs';

export interface PeriodicElement {
  name: string;
  lastname: string;
  email: string;
  status: string;
  share: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'John', lastname: 'Doe', email: 'john@doe.com', status: 'Accepted', share:'Share'},
  { name: 'Jack', lastname: 'Makeer', email: 'jack@makeer.com', status: 'Accepted', share: 'Share'},
  { name: 'Lucas', lastname: 'Lopez', email: 'lucas@lopez.com', status: 'Declined', share: 'Share'},
  { name: 'Mary', lastname: 'Johnson', email: 'mary@johnson.com', status: 'Declined', share: 'Share'},
  { name: 'June', lastname: 'Mayer', email: 'june@mayer.com', status: 'Declined', share: 'Share'},
  { name: 'Charles', lastname: 'Power', email: 'charles@power.com', status: 'Accepted', share: 'Share'},
];

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss']
})
export class UsertableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'lastname', 'email', 'status', 'share'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }

}