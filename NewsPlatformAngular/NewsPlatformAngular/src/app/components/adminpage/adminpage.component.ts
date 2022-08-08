import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsServiceService } from 'src/app/news-service.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  
  isUserLoggedIn=false;
 searchKeyWord=''
  constructor(private userService:UserService,private service:NewsServiceService,private route:Router) { }

  ngOnInit(): void {
    this.userService.isLoggedIn.asObservable().subscribe(res=>
      {this.isUserLoggedIn=res;
      })
  }
  onLogOutClick(){
    this.userService.logOut();
  }

  adminDetails(){
    this.route.navigate(["admin","admin"])
  }


addAdmin(){
  this.route.navigate(["admin","adminForm"])
}

userDetails(){
  this.route.navigate(["admin","user"])
}


addUser(){
this.route.navigate(["admin","userForm"])
}

categoryDetails(){
  this.route.navigate(["admin","category"])
}


addCategory(){
this.route.navigate(["admin","categoryForm"])
}

commentDetails(){
  this.route.navigate(["admin","comments"])
}


addComment(){
this.route.navigate(["admin","commentForm"])
}

subCategoryDetails(){
  this.route.navigate(["admin","subcategory"])
}


addSubCategory(){
this.route.navigate(["admin","subcategoryForm"])
}


likeDetails(){
  this.route.navigate(["admin","like"])
}


likesByNid(){
this.route.navigate(["admin","likeForm"])
}


}
