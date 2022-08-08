import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { NewsmanagementService } from 'src/app/services/newsmanagement.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categorylist : Category[]=[]

  constructor(private service:NewsmanagementService,private route:Router) { }

  ngOnInit(): void {
    this.fetchCategoryDetails();
  }

  fetchCategoryDetails(){
    this.service.getAllCategory().subscribe(data=>{
      console.log(data);
     
      this.categorylist=data;
      

  });
  }

  addCategory(){
    this.route.navigateByUrl("/categoryForm");
  }

  updatePro(prono:number){
    this.route.navigateByUrl("/update/"+prono)
  }

  deletePro(prono:number){
    this.service.deleteCategory(prono).subscribe(()=>{

      this.fetchCategoryDetails();
    }
    )
  }

}
