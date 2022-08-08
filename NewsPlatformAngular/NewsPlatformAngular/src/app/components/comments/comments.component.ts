import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comments } from 'src/app/common/comments';
import { NewsmanagementService } from 'src/app/services/newsmanagement.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  commentlist : Comments[]=[]


  constructor(private service:NewsmanagementService,private route:Router) { }

  ngOnInit(): void {
    this.fetchCommentDetails();
  }

  fetchCommentDetails(){
    this.service.getAllComment().subscribe(data=>{
      console.log(data);
     
      this.commentlist=data;
      

  });
  }

  addComment(){
    this.route.navigateByUrl("/commentForm");
  }

  updatePro(prono:number){
    this.route.navigateByUrl("/update/"+prono)
  }

  deletePro(prono:number){
    this.service.deleteComment(prono).subscribe(()=>{

      this.fetchCommentDetails();
    }
    )
  }

}
