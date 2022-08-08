import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewsArticle } from 'src/Models/NewsArticle.model';
import { NewsServiceService } from '../news-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-news-article-card',
  templateUrl: './news-article-card.component.html',
  styleUrls: ['./news-article-card.component.css']
})
export class NewsArticleCardComponent implements OnInit {
  @Input() newsArticle?:NewsArticle;
  @Output() isSelected=new EventEmitter(false);
  isLiked:boolean=false;
  constructor(private newService:NewsServiceService,private userService:UserService,private snackBar: MatSnackBar) { }
  ngOnInit(): void {
  }
onclickLike(newsArticle:NewsArticle){
this.newService.addLike(this.userService.getUserID(),newsArticle).subscribe(res=>{
  console.log(res);
});
this.isLiked=true;
}
onclickComment(){
  this.isSelected.next(true);
}
onClickShare(url:string){
  textToClipboard(url);
  this.snackBar.open("Link to the article is copied", "X", {"duration": 2000});
}
}
function textToClipboard (text:string) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}
