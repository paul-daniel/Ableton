import { Component } from '@angular/core';
import { Link } from '../grouped-link/grouped-link.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  links : Link[] = [
    {
      label: "Register Live or Push",
      url : "#"
    },
    {
      label: "About Ableton",
      url : "#"
    },
    {
      label: "Jobs",
      url : "#"
    },
  ]

  educationLinks : Link[] = [
    {
      label: "Register Live or Push",
      url : "#"
    },
    {
      label: "About Ableton",
      url : "#"
    },
    {
      label: "Jobs",
      url : "#"
    },
  ]

  signLinks : Link[] = [
    {
      label: "Register Live or Push",
      url : "#"
    },
    {
      label: "About Ableton",
      url : "#"
    },
    {
      label: "Jobs",
      url : "#"
    },
  ]

  communityLinks : Link[] = [
    {
      label: "Register Live or Push",
      url : "#"
    },
    {
      label: "About Ableton",
      url : "#"
    },
    {
      label: "Jobs",
      url : "#"
    },
  ]
}
