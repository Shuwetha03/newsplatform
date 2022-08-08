import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Likes } from 'src/app/common/likes';
import { NewsmanagementService } from 'src/app/services/newsmanagement.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  likelist : Likes[]=[]

  constructor(private service:NewsmanagementService,private route:Router) { }

  ngOnInit(): void {
    this.fetchLikeDetails();

  }

  fetchLikeDetails(){
    this.service.getAllLike().subscribe(data=>{
      console.log(data);
     
      this.likelist=data;
      

  });
  }

  addLike(){
    this.route.navigateByUrl("/likeForm");
  }

  updatePro(prono:number){
    this.route.navigateByUrl("/update/"+prono)
  }

  deletePro(prono:number){
    this.service.deleteLike(prono).subscribe(()=>{

      this.fetchLikeDetails();
    }
    )
  }

}
