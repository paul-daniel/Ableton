import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() imgUrl : string = '';
  @Input() alt : string = '';
  @Input() title ?: string;
  @Input() desc ?: string;
  @Input() link ?: string;
  @Input() bgColor ?: string;
}