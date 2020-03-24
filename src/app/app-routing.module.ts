import { ErrorHandlingComponent } from './components/error-handling/error-handling.component';
import { DatePickComponent } from './components/date-pick/date-pick.component';
import { JsonApiComponent } from './components/json-api/json-api.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { TemplateComponent } from './components/template/template.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  
  {path:'', redirectTo: 'template',  pathMatch: 'full'},
  { path: 'template', component: TemplateComponent },
  {path:'reactive', component:ReactiveComponent},
  {path:'pagination', component:PaginationComponent},
  {path:'json-api', component:JsonApiComponent},
  {path:'date-pick', component:DatePickComponent},
  {path:'error-handling', component:ErrorHandlingComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
