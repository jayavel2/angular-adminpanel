import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //@Input() user: number;
  //@Input() user: number;
  //todaydate!: string;
public userdata=[] as any
  //id: number,



  constructor(private userList: UserDataService) { }

  ngOnInit(): void {
    this.userList.getUserData().subscribe((data)=>{
      this.userdata = data
    })
  }

  deleteUser(i: any){
    this.userList.deleteUserData(i).subscribe()
  }
}
