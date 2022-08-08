import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Category } from '../category';
import { NewsServiceService } from '../news-service.service';
import { SubCategory } from '../sub-category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
@Output() onSelectedItem=new EventEmitter(null);
 menu:any=[];
 categories: Category[]
 subcategories: SubCategory[]
 cat$=this.service.getAllCategory();
 subCat$=this.service.getAllSubCategory()
  constructor(private service: NewsServiceService) { }

  ngOnInit(): void {
    forkJoin([this.cat$,this.subCat$]).subscribe(([categories,subCategories])=>{
      console.log(categories,subCategories);
      categories.forEach((item)=>{
      let data:any={title:item.name}
      data['sub']=[]
        subCategories.forEach((item2)=>{
          if(item.id==item2.id){
            data['sub'].push({title:item2.cname})
          }
        })
        this.menu.push(data)
      })
  console.log(this.menu)
    })
    // this.listOfCategories()
    // this.listOfSubCategories()
  }

   listOfCategories(){
    this.service.getAllCategory().subscribe(data=>{
      console.log(data);
      this.categories = data;
    });
    
   }
   listOfSubCategories(){
    this.service.getAllSubCategory().subscribe(data=>{
      console.log(data);
      this.subcategories = data;
    });
  }
 
  onSelectedMenu(str:string){
    this.onSelectedItem.next(str);
   }
}
