import { Component, Input } from '@angular/core';

export interface Link {
  label : string;
  url : string;
}


@Component({
  selector: 'app-grouped-link',
  templateUrl: './grouped-link.component.html',
  styleUrls: ['./grouped-link.component.scss']
})
export class GroupedLinkComponent {
  @Input() title: string = "";
  @Input() links: Link[] = [];
  @Input() desc: string = "";
}
