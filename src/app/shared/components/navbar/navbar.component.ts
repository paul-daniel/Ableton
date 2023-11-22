import { Component, HostListener, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit, OnDestroy {

  isMobile : boolean = false;
  navMenuOpen : boolean = false;

  private unlistener: () => void = () => {};

  constructor(private cdref: ChangeDetectorRef){}

  ngAfterViewInit(): void {
    this.checkIsMobile();
    this.cdref.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event : Event): void {
    this.checkIsMobile();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event : Event): void {
    if(this.isMobile && this.navMenuOpen){
      window.scrollTo(0,0);
    }
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

  ngOnDestroy(): void {
      this.unlistener();
  }
}
