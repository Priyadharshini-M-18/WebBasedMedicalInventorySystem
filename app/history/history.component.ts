import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  name:string="";
  email:string="";
  res_email:string="";
  order_prd_name:string="";
  order_prd_qnty!:number;
  order_cost!:number;
 
  count:number=0;
  
  Orders :any[]=[];
  constructor(private router: Router,private http: HttpClient, private route:ActivatedRoute) { 
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params);
      this.email=params.data;
      this.name=params.n;
      this.getAll();
    });
    
}

ngOnInit():void{
  
 }

 getAll() {

 

   this.http.get("http://localhost:9992/getOrders")
   .subscribe((resultData: any)=>
   {
     let i:number =0;
     
     for(i=0;i<resultData.data.length;i++)
     {  this.res_email=String(resultData.data[i].email);
       if(this.res_email==this.email){
      
         this.Orders[this.count]=Object.assign({},resultData.data[i]);
         this.count++;
       }  
     
    }
   });
   
 
   }
   logout(){
      
    localStorage.clear();
    this.router.navigate(['/login']);
   }

}
