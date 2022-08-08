import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { NewsmanagementService } from 'src/app/services/newsmanagement.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userlist : User[]=[]

  constructor(private service:NewsmanagementService,private route:Router) { }

  ngOnInit(): void {

    this.fetchUserDetails();
  }

  fetchUserDetails(){
    this.service.getAllUser().subscribe(data=>{
      console.log(data);
     
      this.userlist=data;
      

  });
  }

  addUser(){
    this.route.navigateByUrl("/userForm");
  }

  updatePro(useno:number){
    this.route.navigateByUrl("/update/"+useno)
  }

  deletePro(prono:number){
    this.service.deleteUser(prono).subscribe(()=>{

      this.fetchUserDetails();
    }
    )
  }

}
