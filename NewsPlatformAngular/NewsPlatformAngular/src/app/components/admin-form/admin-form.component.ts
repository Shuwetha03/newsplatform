import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/common/admin';
import { NewsmanagementService } from 'src/app/services/newsmanagement.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  admin :Admin = new Admin(0,"","","")
  isEditable : boolean = false

  constructor(private service:NewsmanagementService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

 
    //console.log(this.employee)
    if(this.isEditable){ // iseditable = true
      this.service.updateAdmin(this.admin).subscribe(()=>{
        this.route.navigateByUrl("/admin")
      })

   }else{
    this.service.saveAdmin(this.admin).subscribe(()=>{
      this.route.navigateByUrl("/admin")
    })
    }}
  

}
