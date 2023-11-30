import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GroupedLinkComponent } from './components/grouped-link/grouped-link.component';
import { BannerComponent } from './components/banner/banner.component';
import { DescriptiveTextComponent } from './components/descriptive-text/descriptive-text.component';
import { SectionPortraitComponent } from './components/section-portrait/section-portrait.component';

const components = [
  NavbarComponent,
  FooterComponent,
  GroupedLinkComponent,
  BannerComponent,
  DescriptiveTextComponent,
  SectionPortraitComponent,
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
