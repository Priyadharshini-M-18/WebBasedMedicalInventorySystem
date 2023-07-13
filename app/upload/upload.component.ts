import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  name: string ="";
  id: string ="";
  quantity!: number;
  amount!:number;
  sold:number=0;
  man_date:string="";
  exp_date:string="";
 count:number=0;
 StockData:any[]=[];
 flag:number=0;
 
  constructor(private http: HttpClient)
  {
    this.http.get("http://localhost:9992/user/getAll")
     .subscribe((resultData: any)=>
     {
       let i:number =0;
       for(i=0;i<resultData.data.length;i++)
       {
           this.StockData[i]=Object.assign({},resultData.data[i]);
         
           this.count++;
            
       }
     });
  }
 
  ngOnInit(): void
  {
  }
 
  register()
  {
    
     let i:number=0;
     for(i=0;i<this.count;i++)
     {
        if(this.StockData[i].name!=this.name && this.StockData[i].id!=this.id)
        {
          this.flag++;
        }
        else{
          this.flag=0;
          break;
        }
     }
     if(this.flag!=0){
      if(this.quantity>0 && this.amount>0){
    let bodyData =
    {
      "name" : this.name,
      "id" : this.id,
      "quantity" :Number(this.quantity),
      "sold":this.sold,
      "amount":Number(this.amount),
      "man_date":this.man_date,
      "exp_date":this.exp_date
    };
    this.http.post("http://localhost:9992/addStock",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Registered Successfully")
    });
  }
  else{
    alert("Inadequate quantity")
  }

  }
  else{
    alert("Product already availabe..!!\nbetter update the quantity")
  }
  }
 
  save()
  {
    this.register();
  }

}

