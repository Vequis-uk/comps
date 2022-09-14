import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit {
  //set to false by default but the parent component can overwrite this
  @Input() header = false;
  //this will display 3 lines by default aka the divs with the class line
  @Input() lines = 0;

  constructor() {}

  ngOnInit(): void {}
}
