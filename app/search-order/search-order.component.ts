import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent {
  name:string="";
 count:number=0;
 Orders:any[]=[];
  constructor(private router: Router,private http: HttpClient, private route:ActivatedRoute) { 
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params);
      this.name=params.data;
      //alert(this.email);
    });
    this.http.get("http://localhost:9992/getOrders")
    .subscribe((resultData: any)=>
    {
      let i:number =0;
      
      for(i=0;i<resultData.data.length;i++)
      {  
        if(String(resultData.data[i].order_prd_name)==this.name){
       
          this.Orders[this.count]=Object.assign({},resultData.data[i]);
          
          console.log(this.Orders[i]);
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
