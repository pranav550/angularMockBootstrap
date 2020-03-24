import { MockService } from './../../services/mock.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  records:any=[];
  totalRecords:number
  page:number=1
  constructor(private mockService:MockService) { }

  ngOnInit(): void {
    this.getRecords()
  }

  getRecords(){
    this.mockService.getData().subscribe(data=>{
     // console.log(data.results)
      this.records=data.results
      this.totalRecords=data.results.length
    })
  }

  pageChange(event){
    console.log(event)
  }

}
