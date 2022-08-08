import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { NewsmanagementService } from 'src/app/services/newsmanagement.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  category :Category = new Category(0,"")
  isEditable : boolean = false

  constructor(private service:NewsmanagementService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

 
    //console.log(this.employee)
    if(this.isEditable){ // iseditable = true
      this.service.updateCategory(this.category).subscribe(()=>{
        this.route.navigateByUrl("/category")
      })

   }else{
    this.service.saveCategory(this.category).subscribe(()=>{
      this.route.navigateByUrl("/category")
    })
    }}
  

}
