import { MockService } from './../../services/mock.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-json-api',
  templateUrl: './json-api.component.html',
  styleUrls: ['./json-api.component.css']
})
export class JsonApiComponent implements OnInit {
  users$:Observable<any[]>
  
  constructor(private mock:MockService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    // this.mock.getUsers().subscribe(data=>{
    //   console.log(data)
    //   this.users$=data.results
    // })

    this.users$ = this.mock.getData()
    console.log(this.users$)
  }

}
