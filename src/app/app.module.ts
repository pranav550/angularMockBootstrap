import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';    
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TemplateComponent } from './components/template/template.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { DatePickComponent } from './components/date-pick/date-pick.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { JsonApiComponent } from './components/json-api/json-api.component';
import { ErrorHandlingComponent } from './components/error-handling/error-handling.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {HttpClientModule} from '@angular/common/http';
import { PaginationChildComponent } from './components/pagination-child/pagination-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { JsonApiChildComponent } from './components/json-api-child/json-api-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemplateComponent,
    ReactiveComponent,
    DatePickComponent,
    PaginationComponent,
    JsonApiComponent,
    ErrorHandlingComponent,
    PageNotFoundComponent,
    PaginationChildComponent,
    JsonApiChildComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
