import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  
  i!:number;
  id:string="";
  
  quantity!:number;
  sold!:number;
  amount!:number;
  man_date:string="";
  exp_date:string="";
  islogin=false;

  StockData :any[]=[];
email:string="";
name:string="";
searchText:string="";
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

  view(){
    this.router.navigate(['/viewOrders'],{queryParams:{data:this.email,n:this.name}});
  }
  search(){
    if(this.searchText!=null){
    this.router.navigate(['/search'],{queryParams:{data:this.email,n:this.name,s:this.searchText}});}
    else{
      alert("Enter some product name")
    }
  }
  home(){
    this.router.navigate(['/customer'],{queryParams:{data:this.email}});
  }
  logout(){
      
    localStorage.clear();
    this.router.navigate(['/login']);
   }
}
