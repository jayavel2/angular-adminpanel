import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private userdata: UserDataService) { }

  ngOnInit(): void {
  }

  userCreate = this.fb.group({
    name : ['',[Validators.required]],
    email :['',[Validators.required]],
    contactnumber:['',[Validators.required]]
  })

  createUser(){
    //this.userCreate.storeData(userCreate);
    //postUserData
    if(this.userCreate.valid){
      console.log("---value",this.userCreate.value);
    //  this.userdata.postUserData(this.userCreate.value).subscribe();
    }
  }
}
