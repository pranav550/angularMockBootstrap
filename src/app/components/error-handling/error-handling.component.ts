import { MockService } from './../../services/mock.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {
  records:any=[]
  constructor(private service:MockService) { }

  ngOnInit(): void {
    this.getRecords()
  }

  getRecords(){
    this.service.getData().subscribe((data)=>{
      this.records = data.results
    })
  }

}
