import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 isUserLoggedIn=false;
 searchKeyWord=''
  constructor(private userService:UserService,private service:NewsServiceService) { }

  ngOnInit(): void {
    this.userService.isLoggedIn.asObservable().subscribe(res=>
      {this.isUserLoggedIn=res;
      })
  }
  onLogOutClick(){
    this.userService.logOut();
  }
  search(){
    this.service.searchNews(this.searchKeyWord);
  }

}
