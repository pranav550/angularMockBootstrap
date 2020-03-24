import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pick',
  templateUrl: './date-pick.component.html',
  styleUrls: ['./date-pick.component.css']
})
export class DatePickComponent implements OnInit {
  minDate: Date;
  constructor() {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    
  }

  ngOnInit(): void {
  }

}
