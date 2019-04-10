import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  emailPattern = "^[a-z]+@[a-z]+\.[a-z]$"; 
  type:any;
  log(x){
    console.log(x);
  }
  typecheck(y){
    console.log(y);
  }

  malert(e){
    console.log(e);
    // swal("Nice!", "Form Submitted Successfully!", "success");

    alert("successfully submitted");
  }
}
