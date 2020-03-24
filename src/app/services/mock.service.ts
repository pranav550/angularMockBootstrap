import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Constant} from '../constant';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>(Constant.url)
    .pipe(catchError(this.handleError))
  }
  handleError(error){
    return throwError(error.message)
    }

    getUsers(){
      return this.http.get<any>(Constant.url)
    }
}



