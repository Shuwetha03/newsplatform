import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, forkJoin, Observable,of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn= new BehaviorSubject<boolean>(false);
  newsurl ="http://localhost:8080/article";
  
  constructor(private httpclient : HttpClient,private router:Router) { }
  email : string;
  password: string;
  user:User
  logOut(){
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('passKey');
    sessionStorage.removeItem('uid');
    sessionStorage.removeItem('role');
    this.isLoggedIn.next(false);
    this.router.navigate(['login']);
  }

  logIn(username:string,password:string):Observable<boolean>{
   return this.getUserByName(username,password).pipe(switchMap(value=>{
    console.log(value)
    if(value!=null){
     sessionStorage.setItem('username',username);
     sessionStorage.setItem('passKey',password);
     sessionStorage.setItem('uid',value.uid);
     sessionStorage.setItem('role',value.roles);
     this.isLoggedIn.next(true);
     return of(true)
    }
    return of(false)
   }),catchError((error:any)=>{return of(false)}))
   //.subscribe(res=>{
  //   sessionStorage.setItem('username',username);
  //   sessionStorage.setItem('passKey',password);
  //   this.isLoggedIn.next(true);
  //  })
  
  }
  checkIfLoggedIn():boolean{
   let isUser=(Boolean)(sessionStorage.getItem('username')&&sessionStorage.getItem('passKey'))
   return isUser;
  }

  getUserByName(email: string,password:string):Observable<any>{
    const userByNameurl  = "http://localhost:8080/api/users/search/findByEmailAndPassword?email="+email+"&password="+password
    return this.httpclient.get<any>(userByNameurl);
  }

  getUserID():number{
    return parseInt(sessionStorage.getItem('uid'));
  }
  getUserRole():string{
    return sessionStorage.getItem('role');
  }

}
