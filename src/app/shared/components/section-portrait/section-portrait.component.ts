import { Component, Input } from '@angular/core';

export enum Oriantation {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  CENTER = 'CENTER'
}

@Component({
  selector: 'app-section-portrait',
  templateUrl: './section-portrait.component.html',
  styleUrls: ['./section-portrait.component.scss']
})
export class SectionPortraitComponent {
  @Input() mainImgUrl: string = '';
  @Input() imagesUrl : string[] = [];
  @Input() color : string = '';
  @Input() oriantation : Oriantation = Oriantation.LEFT;
  LEFT = Oriantation.LEFT;
  RIGHT = Oriantation.RIGHT;
  CENTER = Oriantation.CENTER;
}
