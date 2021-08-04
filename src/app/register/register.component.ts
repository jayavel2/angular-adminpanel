import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import  {MustMatch} from '../validator/confirm-password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
   
  }


  Data= this.fb.group(
    {
      name :['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,}$/)]],
      confirmpassword :['',[Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,}$/)]],
      terms :['',Validators.required]
    },
    {
      validator: [MustMatch('password', 'confirmpassword')]
    }
  )

  get register() { return this.Data.controls; }

  RegisterUser(){
    console.log("------------------",this.Data);
  }

  check(event: any, item: any) {
    console.log("Checking passed item: ",event,item);

}
}

