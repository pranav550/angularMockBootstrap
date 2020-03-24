import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  isSubmit:boolean=false
  contactForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(10)]),
    description:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.email,Validators.required]),
    mobile:new FormControl('',[Validators.required]),
    country:new FormControl('',[Validators.required]),
    
    gender: new FormControl('',[Validators.required]),
    isMarried: new FormControl('',[Validators.required]),
  
   
  })

  countries=[
    {id:1, name:"india"},
    {id:2, name:"UK"},
    {id:3, name:"USA"}
  ]

  ngOnInit(){

  }
 
  get name() {
    return this.contactForm.get('name');
  } 

 
 
  
 
  get email() {
    return this.contactForm.get('email');
  } 

  get mobile() {
    return this.contactForm.get('mobile');
  } 

  get country() {
    return this.contactForm.get('mobile');
  } 

  get description() {
    return this.contactForm.get('mobile');
  } 
 
  get gender() {
    return this.contactForm.get('gender');
  } 
 
  get isMarried() {
    return this.contactForm.get('isMarried');
  } 
 
 
  onSubmit() {
    if(this.contactForm.invalid){
      this.isSubmit=true
    }
    else{
      this.isSubmit=false
    }
    console.log(this.contactForm.value);
  }
 
 
 
}
 
 



