import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  email:string="";
  nam:string="";
  id:string="";
  searchText:string="";
  product:any[]=[];
  name:string="";
  quantity!:number;
  qnty!:number;
  cost!:number;
  man_date:string="";
  exp_date:string="";
  order_prd_name:string="";
  order_prd_qnty!:number;
  order_cost!:number;
  sold!:number;
  pay_status!:boolean;
  date!:any;
  flag:number=0;
  available:boolean=false;
  
    constructor(private router: Router,private http: HttpClient, private route:ActivatedRoute,public Datapipe:DatePipe) { 
      var date_of_order=this.Datapipe.transform((new Date),'MM/dd/yyy h:mm:ss');
      
      this.date=date_of_order;
      this.route.queryParams.subscribe((params:any)=>{
        console.log(params);
        this.email=params.data;
        this.nam=params.n;
        this.searchText=params.s;
       
        this.http.get("http://localhost:9992/user/getAll")
    .subscribe((resultData: any)=>
    {
      let i:number =0;
      for(i=0;i<resultData.data.length;i++)
      {
        if(String(resultData.data[i].name)==this.searchText){
          this.flag=0;
          this.id=resultData.data[i].id;
          this.name=this.searchText;
          this.quantity=resultData.data[i].quantity;
          this.cost=Number(resultData.data[i].amount);
          this.man_date=resultData.data[i].man_date;
          this.exp_date=resultData.data[i].exp_date;
          this.sold=resultData.data[i].sold;
          this.available=true;
          break;
          }
          else{
            this.flag=1;
          }
          
           
      }
      if(this.flag!=0){
        alert("Product Not found")
      }
    });
        //alert(this.email);
      });
      
    }
    view(){
      this.router.navigate(['/viewOrders'],{queryParams:{data:this.email}});
    }
    search(){
      this.router.navigate(['/search'],{queryParams:{data:this.email,n:this.name}});
    }
    home(){
      this.router.navigate(['/customer'],{queryParams:{data:this.email,n:this.name}});
    }
    order(){
      
      
      this.qnty=Number(prompt("Enter the quantity:"));
      if(this.qnty!=0){
      this.order_prd_qnty=this.qnty;
      this.order_cost=this.order_prd_qnty*this.cost;
        
      
        let bodyData = {
          "email":this.email,
          "order_prd_name": this.name,
          "order_prd_qnty": this.order_prd_qnty,
          "order_cost":this.order_cost,
          "paid_status":false,
          "date":this.date
        };

        this.http.post("http://localhost:9992/addOrder",bodyData).subscribe((resultData: any)=>
      {
        console.log(resultData);
        alert("Order Successful")
        
       });
    
  this.quantity=this.quantity-this.order_prd_qnty;
  this.sold=this.sold+this.order_prd_qnty;
  let body = {
    "id": this.id,
    "name": this.name
  };
     
    this.http.post("http://localhost:9992/remove",body).subscribe((resultData: any) => {
     console.log(resultData);});
      
      let bodydata ={
    "name" : this.name,
    "id" : this.id,
    "quantity" :this.quantity,
    "sold":this.sold,
    "amount":this.cost,
    "man_date":this.man_date,
    "exp_date":this.exp_date
    };
    
  this.http.post("http://localhost:9992/addStock",bodydata).subscribe((resultData: any)=>
  {
      console.log(resultData);
      
  });
    }
  }
  logout(){
      
    localStorage.clear();
    this.router.navigate(['/login']);
   }
}
