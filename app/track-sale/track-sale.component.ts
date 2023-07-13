import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-track-sale',
  templateUrl: './track-sale.component.html',
  styleUrls: ['./track-sale.component.css']
})
export class TrackSaleComponent {

  i!:number;
  id:string="";
  name:string="";
  quantity!:number;
  sold!:number;
  amount!:number;
  man_date:string="";
  exp_date:string="";
  StockData :any[]=[];
  constructor(private router: Router,private http: HttpClient) {}
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
logout(){
      
  localStorage.clear();
  this.router.navigate(['/login']);
 }
}
