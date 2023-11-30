import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-portrait',
  templateUrl: './section-portrait.component.html',
  styleUrls: ['./section-portrait.component.scss']
})
export class SectionPortraitComponent {
  @Input() mainImgUrl: string = '';
  @Input() imagesUrl : string[] = [];
  @Input() color : string = '';
}
