import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { NewsmanagementService } from 'src/app/services/newsmanagement.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user :User = new User(0,"","","")
  isEditable : boolean = false

  constructor(private service:NewsmanagementService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

 
    //console.log(this.employee)
    if(this.isEditable){ // iseditable = true
      this.service.updateUser(this.user).subscribe(()=>{
        this.route.navigateByUrl("/user")
      })

   }else{
    this.service.saveUser(this.user).subscribe(()=>{
      this.route.navigateByUrl("/user")
    })
    }}

}
