import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { NewsmanagementService } from 'src/app/services/newsmanagement.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user :User = new User(0,"","","");


  constructor(private service: NewsmanagementService, private route:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }


    signUpUser(){
      this.service.loginUser(this.user).subscribe(data=>{
        console.log(this.user);
        this.user=data
        console.log(data)
        
  
  
    })
  }
  

}
