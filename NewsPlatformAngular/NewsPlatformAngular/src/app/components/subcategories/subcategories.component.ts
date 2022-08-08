import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subcategory } from 'src/app/common/subcategory';
import { NewsmanagementService } from 'src/app/services/newsmanagement.service';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {
  sublist : Subcategory[]=[]

  constructor(private service:NewsmanagementService,private route:Router) { }

  ngOnInit(): void {
    this.fetchSubcategoryDetails();
  }

  fetchSubcategoryDetails(){
    this.service.getAllSubcategory().subscribe(data=>{
      console.log(data);
     
      this.sublist=data;
      

  });
  }

  addUser(){
    this.route.navigateByUrl("/subcategoryForm");
  }

  updatePro(useno:number){
    this.route.navigateByUrl("/update/"+useno)
  }

  deletePro(prono:number){
    this.service.deleteSubcategory(prono).subscribe(()=>{

      this.fetchSubcategoryDetails();
    }
    )
  }

}
