import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  product!:any;
  id:string="";
  name:string="";
  quantity!:number;
  sold!:number;
  amount!:number;
  man_date:string="";
  exp_date:string="";
  qnt!:number;
  constructor(private router: Router,private http: HttpClient){
    
  }

   

get(){
 
  let bodyData = {
    id: this.id
    
  };
  this.http.post("http://localhost:9992/getStockByID",bodyData).subscribe((resultData: any) => {
  console.log(resultData);
  this.product=resultData.data;
});

}
  

   public update(){
    
    if(this.qnt>0){
    let bodyData = {
      "id": this.product.id,
      "name": this.product.name
    };
    
    
      
        this.http.post("http://localhost:9992/remove",bodyData).subscribe((resultData: any) => {
        console.log(resultData);});
      this.qnt=this.product.quantity+this.quantity;
      
        let body =
    {
      "name" : this.product.name,
      "id" : this.product.id,
      "quantity" :this.qnt,
      "sold":this.product.sold,
      "amount":this.product.amount,
      "man_date":this.product.man_date,
      "exp_date":this.product.exp_date
    };
    this.http.post("http://localhost:9992/addStock",body).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Registered Successfully")
    });
  
  }
  else{
    alert("Enter the quantity")
  }

   }
  }

   /*public updateAmount(){
    this.amount=Number(this.amt);
      let bodyData={
        id:this.id,
        amount:this.amount
        
      };
      this.http.post("http://localhost:9992/updateAmount",bodyData).subscribe((resultData: any) => {
        console.log(resultData);
 
        if (resultData.status)
        {
          
          alert("Update Successful")
        }
        else
         {
          alert("Incorrect Email and Password")
          console.log("Errror login");
        }
      });


   }*/


