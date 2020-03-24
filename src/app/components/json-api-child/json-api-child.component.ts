import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-json-api-child',
  templateUrl: './json-api-child.component.html',
  styleUrls: ['./json-api-child.component.css']
})
export class JsonApiChildComponent implements OnInit {
@Input() users$
  constructor() { }

  ngOnInit(): void {
  }

}
