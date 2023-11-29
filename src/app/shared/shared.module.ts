import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GroupedLinkComponent } from './components/grouped-link/grouped-link.component';
import { BannerComponent } from './components/banner/banner.component';

const components = [
  NavbarComponent,
  FooterComponent,
  GroupedLinkComponent,
  BannerComponent
]

@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
  imports: [
    CommonModule,
  ],
})
export class SharedModule { }
