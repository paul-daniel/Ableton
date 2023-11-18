import { Component, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  isMobile : boolean = false;
  navMenuOpen : boolean = false;

  ngAfterViewInit(): void {
    this.checkIsMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event : Event): void {
    this.checkIsMobile();
  }

  checkIsMobile() : void {
    this.isMobile = window.innerWidth <= 850;
    if(window.innerWidth > 850 && this.navMenuOpen){
      this.navMenuOpen = false;
    }
  }

  toggleMenu() {
    this.navMenuOpen = !this.navMenuOpen;
  }
}
