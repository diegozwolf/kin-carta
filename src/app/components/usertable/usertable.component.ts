import { Component, OnInit } from '@angular/core';
// import { share } from 'rxjs';

// export interface UserData {
//   name: string;
//   lastname: string;
//   email: string;
//   status: string;
//   share: string
// }

// const ELEMENT_DATA:  UserData[] = [
//   { name: 'John', lastname: 'Doe', email: 'john@doe.com', status: 'Accepted', share:'Share'},
//   { name: 'Jack', lastname: 'Makeer', email: 'jack@makeer.com', status: 'Accepted', share: 'Share'},
//   { name: 'Lucas', lastname: 'Lopez', email: 'lucas@lopez.com', status: 'Declined', share: 'Share'},
//   { name: 'Mary', lastname: 'Johnson', email: 'mary@johnson.com', status: 'Declined', share: 'Share'},
//   { name: 'June', lastname: 'Mayer', email: 'june@mayer.com', status: 'Declined', share: 'Share'},
//   { name: 'Charles', lastname: 'Power', email: 'charles@power.com', status: 'Accepted', share: 'Share'},
// ];

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss']
})
export class UsertableComponent implements OnInit {

  searchText:any;
  userStatusValue: string = "";
  userStatus: boolean = false;

  users = [
    { name: 'John', lastname: 'Doe', email: 'john@doe.com', status: 'Accepted', share:'Share'},
    { name: 'Jack', lastname: 'Makeer', email: 'jack@makeer.com', status: 'Accepted', share: 'Share'},
    { name: 'Lucas', lastname: 'Lopez', email: 'lucas@lopez.com', status: 'Declined', share: 'Share'},
    { name: 'Mary', lastname: 'Johnson', email: 'mary@johnson.com', status: 'Declined', share: 'Share'},
    { name: 'June', lastname: 'Mayer', email: 'june@mayer.com', status: 'Declined', share: 'Share'},
    { name: 'Charles', lastname: 'Power', email: 'charles@power.com', status: 'Accepted', share: 'Share'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(status: string){
    if( this.userStatus === true){
      this.userStatusValue = status;
      this.userStatus = !this.userStatus;
    } else {
      this.userStatusValue = '';
      this.userStatus = !this.userStatus;
    }
  }
}
