import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent {
  email:string="";
  res_email:string="";
  order_prd_name:string="";
  order_prd_qnty!:number;
  order_cost!:number;
  date!:any;
  cost:number=0;
  count:number=0;
  name:string="";
  StockData:any="";
  Orders :any[]=[];
  constructor(private router: Router,private http: HttpClient, private route:ActivatedRoute) { 
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params);
      this.email=params.data;
      this.name=params.n;
    });
    
}

ngOnInit():void{
  this.getAll();
 }

remove(name:string,i:number){

  this.http.get("http://localhost:9992/user/getAll")
    .subscribe((resultData: any)=>
    {
      let i:number =0;
      for(i=0;i<resultData.data.length;i++)
      {
        if(String(resultData.data[i].name)==name){
          this.StockData=Object.assign({},resultData.data[i]);
        }
           
      }
    });
    this.StockData.quantity=this.StockData.quantity+this.Orders[i].order_prd_qnty;
    this.StockData.sold=this.StockData.sold-this.Orders[i].order_prd_qnty;
    let Data = {
      "id": this.StockData.id,
      
    };
       
      this.http.post("http://localhost:9992/remove",Data).subscribe((resultData: any) => {
       console.log(resultData);});
        
        let body ={
      "name" : this.StockData.name,
      "id" : this.StockData.id,
      "quantity" :this.StockData.quantity,
        "sold":this.StockData.sold,
      "amount":this.StockData.amount,
      "man_date":this.StockData.man_date,
      "exp_date":this.StockData.exp_date
      };
      
    this.http.post("http://localhost:9992/addStock",body).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Updated Successfully")
    });

let bodyData={
  "email":this.email,
  "name":name
};


  this.http.post("http://localhost:9992/removeOrder",bodyData).subscribe((resultData: any)=>
      {
        console.log(resultData);
        alert("Order Removed")
        
       });



 }

 logout(){
      
  localStorage.clear();
  this.router.navigate(['/login']);
 }
 home(){
  this.router.navigate(['/customer'],{queryParams:{data:this.email}});
}
 getAll() {

 

   this.http.get("http://localhost:9992/getOrders")
   .subscribe((resultData: any)=>
   {
     let i:number =0;
     
     for(i=0;i<resultData.data.length;i++)
     {  this.res_email=String(resultData.data[i].email);
       if(this.res_email==this.email&& resultData.data[i].paid_status==false){
      
         this.Orders[this.count]=Object.assign({},resultData.data[i]);
         this.cost+=this.Orders[this.count].order_cost;
         console.log(this.Orders[i]);
         this.count++;
       }  
     
    }
   });
   
 
   }
   view(){
    this.router.navigate(['/viewOrders'],{queryParams:{data:this.email,n:this.name}});
  }
   
}

