import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { NewsArticle } from 'src/Models/NewsArticle.model';
import { NewsServiceService } from '../news-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent implements OnInit {
  @Input() newsArticle?:NewsArticle;
  commentText: string="";
  comments:(any)[];
  user: string="";
  currentUserId: number;
  constructor(private service: NewsServiceService,private userService: UserService) { }

  ngOnInit(): void {
    this.currentUserId=this.userService.getUserID();
    this.comments=this.newsArticle.comments;
    setInterval(()=>{
      this.service.getComments(this.newsArticle.id).subscribe((res:any)=>{
        this.comments=res;
      })},3000)
  }
  onSubmit(){
    if(this.commentText!=""){
      this.service.addComment(this.userService.getUserID(),this.newsArticle,this.commentText).subscribe((res)=>{
        this.commentText="";
      })
    }
  }
}
