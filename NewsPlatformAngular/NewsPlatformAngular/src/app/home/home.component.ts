import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NewsServiceService } from '../news-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currrentArticles:any;
  constructor(private service:NewsServiceService,private userService:UserService,private spinner: NgxSpinnerService) { }
  showArticleDetails:boolean=false;
  selectedArticle:any;
  ngOnInit(): void 
  {
    this.service.newSearch.asObservable().subscribe((res:string)=>{
      this.onSelectedTag(res);
    });
    if(this.userService.checkIfLoggedIn){
      this.spinner.show();
      this.service.getNewsByTag('latest',this.userService.getUserID()).subscribe((data)=>{
        this.currrentArticles=data;
        this.spinner.hide();
      });
    } 
    else{
    this.service.getNewsByTag('latest').subscribe((data)=>{
    this.currrentArticles=data;
  });
}
}
onSelectedArticle(selectedArticle:any){
  this.showArticleDetails=true;
  this.selectedArticle=selectedArticle;
}
onSelectedTag(tag:any){
  this.spinner.show();
  this.service.getNewsByTag(tag,this.userService.getUserID()).subscribe((data)=>{
    this.currrentArticles=data;
    this.spinner.hide();
  });
}
onclickBack(){
  this.showArticleDetails=false;
}

}
