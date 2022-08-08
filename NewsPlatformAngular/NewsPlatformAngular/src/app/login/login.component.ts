import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsServiceService } from '../news-service.service';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string;
  password: string;
  constructor(private service: NewsServiceService,private router:Router,private userservice:UserService,private httpClient:HttpClient) { }

  ngOnInit(): void {
  }
 
  loginSubmit2(loginForm: any){
    this.userservice.logIn(loginForm.username,loginForm.password).pipe(
      map((res)=>{
        if(res){
        if(this.userservice.getUserRole()=="ROLE_ADMIN"){
          this.router.navigate(['admin']);
        }
        else{
        this.router.navigate(['home']);
        }
      }
      else{
        alert("Invalid Credentials")
      }
      },
      catchError((e: any) =>{
        console.log(e,'error')
        //do your processing here
        return throwError(e);
      }),
    )).subscribe();
  }
}
