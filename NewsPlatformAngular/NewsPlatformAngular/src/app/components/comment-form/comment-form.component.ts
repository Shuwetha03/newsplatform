import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comments } from 'src/app/common/comments';
import { NewsmanagementService } from 'src/app/services/newsmanagement.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  comment :Comments = new Comments(0,"",0,"",0,0)
  isEditable : boolean = false
  constructor(private service:NewsmanagementService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

 
    //console.log(this.employee)
    if(this.isEditable){ // iseditable = true
      this.service.updateComment(this.comment).subscribe(()=>{
        this.route.navigateByUrl("/comments")
      })

   }else{
    this.service.saveComment(this.comment).subscribe(()=>{
      this.route.navigateByUrl("/commentForm")
    })
    }}

}
