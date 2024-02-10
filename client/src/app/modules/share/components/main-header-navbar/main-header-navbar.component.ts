import { Component } from '@angular/core';

@Component({
  selector: 'app-main-header-navbar',
  templateUrl: './main-header-navbar.component.html',
  styleUrls: ['./main-header-navbar.component.scss']
})
export class MainHeaderNavbarComponent {
  isNavbarOpen: boolean = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
