import { Component } from '@angular/core';
import { Oriantation } from 'src/app/shared/components/section-portrait/section-portrait.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  LEFT = Oriantation.LEFT;
  RIGHT = Oriantation.RIGHT;
  CENTER = Oriantation.CENTER;

}
