import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit,ViewChild, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  @Output() showSideBar = new EventEmitter<string>();
  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this,this.showSideBar.emit(this.sidenav.mode);
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this,this.showSideBar.emit(this.sidenav.mode);
          this.sidenav.open();
        }
      });
  }

}
