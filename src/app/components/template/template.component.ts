import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  isValidFormSubmitted:boolean=true
  user = {
    name: '',
    email: '',
   gender:'',
   mobile:'',
   country:'',
   description:'',
   accept:''
  };
  countryList:any= [
    {id:1,name:"India" },
    {id:2,name:"USA" },
    {id:3,name:"Japan" },

  ];
  constructor() { }
 
  onSubmit(contactForm) {
    console.log(this.isValidFormSubmitted)
   
	   if(contactForm.invalid){
      this.isValidFormSubmitted = false;
      console.log(this.isValidFormSubmitted)
	//	return;	
     } 	
     else{
      this.isValidFormSubmitted = true;
      console.log(this.isValidFormSubmitted)
     }
	  
    console.log(contactForm.value);
  }

  ngOnInit(): void {
  }

}
