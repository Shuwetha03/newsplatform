import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/common/admin';
import { NewsmanagementService } from 'src/app/services/newsmanagement.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminlist : Admin[]=[]

  constructor(private service:NewsmanagementService,private route:Router) { }

  ngOnInit(): void {
    this.fetchAdminDetails();
  }

  fetchAdminDetails(){
    this.service.getAllAdmin().subscribe(data=>{
      console.log(data);
     
      this.adminlist=data;
      

  });
  }

  addAdmin(){
    this.route.navigateByUrl("/adminForm");
  }

  updatePro(prono:number){
    this.route.navigateByUrl("/update/"+prono)
  }

  deletePro(prono:number){
    this.service.deleteAdmin(prono).subscribe(()=>{

      this.fetchAdminDetails();
    }
    )
  }

}
