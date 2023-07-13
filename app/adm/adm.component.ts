import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent {
  name:string="";
  email:string="";
  cutData:any[]=[];
  count:number=0;
  searchText:string="";

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
          if(String(resultData.data[i].email)!="admin@gmail.com"){
           this.cutData[this.count]=Object.assign({},resultData.data[i]);
           this.count++;
            
       }
      }
     });
     
   
     }
     history(email:string,name:string){
      this.router.navigate(['/history'],{queryParams:{data:email,n:name}});

     }
     search(){
      this.router.navigate(['/searchOrders'],{queryParams:{data:this.searchText}});
     }
     logout(){
      
      localStorage.clear();
      this.router.navigate(['/login']);
     }

}
