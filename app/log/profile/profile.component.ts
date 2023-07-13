import { Component,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
 
})
export class ProfileComponent {
  email:string="";
  i!:number;
  id:string="";
  name:string="";
  quantity!:number;
  sold!:number;
  amount!:number;
  man_date:string="";
  exp_date:string="";
  islogin=false;

  qnty!:number;
  order_prd_id:string="";
  order_prd_qnty!:number;
  order_cost!:number;
  

  StockData :any[]=[];
  constructor(private router: Router,private http: HttpClient, private route:ActivatedRoute) { 
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params);
      this.email=params.data;
      //alert(this.email);
    });
    
  }
  
    
  
  ngOnInit():void{
   this. getAll();
  }

  getAll() {
   
    this.http.get("http://localhost:9992/user/getAll")
    .subscribe((resultData: any)=>
    {
      let i:number =0;
      for(i=0;i<resultData.data.length;i++)
      {
          this.StockData[i]=Object.assign({},resultData.data[i]);
          console.log(this.StockData[i]);
           
      }
    });
    
  
    }
    
    order(id:string,amount:number,i:number){
      
      this.order_prd_id=id;
      
      this.qnty=Number(prompt("Enter the quantity:"));
      if(this.qnty!=0){
      this.order_prd_qnty=this.qnty;
      this.order_cost=this.order_prd_qnty*amount;
        
      
        let bodyData = {
          "email":this.email,
          "order_prd_id": this.order_prd_id,
          "order_prd_qnty": this.order_prd_qnty,
          "order_cost":this.order_cost
        };

        this.http.post("http://localhost:9992/addOrder",bodyData).subscribe((resultData: any)=>
      {
        console.log(resultData);
        alert("Order Successful")
        
       });
  }
  this.StockData[i].quantity=this.StockData[i].quantity-this.order_prd_qnty;
  this.StockData[i].sold=this.StockData[i].sold+this.order_prd_qnty;
  let bodyData = {
    "id": this.StockData[i].id,
    "name": this.StockData[i].name
  };
     
    this.http.post("http://localhost:9992/remove",bodyData).subscribe((resultData: any) => {
     console.log(resultData);});
      
      let body ={
    "name" : this.StockData[i].name,
    "id" : this.StockData[i].id,
    "quantity" :this.StockData[i].quantity,
      "sold":this.StockData[i].sold,
    "amount":this.StockData[i].amount,
    "man_date":this.StockData[i].man_date,
    "exp_date":this.StockData[i].exp_date
    };
    
  this.http.post("http://localhost:9992/addStock",body).subscribe((resultData: any)=>
  {
      console.log(resultData);
      alert("Updated Successfully")
  });
  
  
  }
  logout(){
      
    localStorage.clear();
    this.router.navigate(['/login']);
   }

viewOrders(){
  this.router.navigate(['/viewOrders'],{queryParams:{data:this.email}});
}
    
}
