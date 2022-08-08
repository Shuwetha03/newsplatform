import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Likes } from 'src/app/common/likes';
import { NewsmanagementService } from 'src/app/services/newsmanagement.service';

@Component({
  selector: 'app-likes-form',
  templateUrl: './likes-form.component.html',
  styleUrls: ['./likes-form.component.css']
})
export class LikesFormComponent implements OnInit {
  like :Likes= new Likes(0,0,"",0)
  isEditable : boolean = false

  constructor(private service:NewsmanagementService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

 
    //console.log(this.employee)
    if(this.isEditable){ // iseditable = true
      this.service.updateLike(this.like).subscribe(()=>{
        this.route.navigateByUrl("/like")
      })

   }else{
    this.service.saveLike(this.like).subscribe(()=>{
      this.route.navigateByUrl("/likeForm")
    })
    }}

}
