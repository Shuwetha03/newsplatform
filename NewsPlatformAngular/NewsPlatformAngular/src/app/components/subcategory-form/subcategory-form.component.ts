import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subcategory } from 'src/app/common/subcategory';
import { NewsmanagementService } from 'src/app/services/newsmanagement.service';

@Component({
  selector: 'app-subcategory-form',
  templateUrl: './subcategory-form.component.html',
  styleUrls: ['./subcategory-form.component.css']
})
export class SubcategoryFormComponent implements OnInit {
  subcat :Subcategory = new Subcategory(0,"",0)
  isEditable : boolean = false
  constructor(private service:NewsmanagementService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

 
    //console.log(this.employee)
    if(this.isEditable){ // iseditable = true
      this.service.updateSubcategory(this.subcat).subscribe(()=>{
        this.route.navigateByUrl("/subcategoryForm")
      })

   }else{
    this.service.saveSubcategory(this.subcat).subscribe(()=>{
      this.route.navigateByUrl("/subcategory")
    })
    }}


}
