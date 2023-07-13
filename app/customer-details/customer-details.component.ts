import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

  name:string="";
  email:string="";
  cutData:any[]=[];

  constructor(private router: Router,private http: HttpClient) {}
  ngOnInit():void{
    this. getAll();
   }
 
   getAll() {
    
     this.http.get("http://localhost:9992/user/getAllUser")
     .subscribe((resultData: any)=>
     {
       let i:number =0;
       for(i=0;i<resultData.data.length;i++)
       {
           this.cutData[i]=Object.assign({},resultData.data[i]);
           console.log(this.cutData[i]);
            
       }
     });
     
   
     }
     logout(){
      
      localStorage.clear();
      this.router.navigate(['/login']);
     }
}
