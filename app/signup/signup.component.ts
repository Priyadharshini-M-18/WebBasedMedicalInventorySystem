import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string ="";
  email: string ="";
  password: string ="";
  confirm_password:string="";
 em:string="";
  cutData:any[]=[];
  count:number=0;
 flag:number=0;
  constructor(private http: HttpClient)
  {
  }
 
  ngOnInit(): void
  {
  }
 
  register()
  {

    this.http.get("http://localhost:9992/user/getAllUser")
     .subscribe((resultData: any)=>
     {
       let i:number =0;
       for(i=0;i<resultData.data.length;i++)
       {
          if(String(resultData.data[i].email)!="admin@gmail.com"){
           this.cutData[this.count]=Object.assign({},resultData.data[i].email);
           this.count++;
            
       }
      }
     });
     let i:number=0;
     for(i=0;i<this.count;i++)
     {
        if(this.cutData[i]!=this.email)
        {
          this.flag++;
        }
        else{
          this.flag=0;
          break;
        }
     }
     
if(this.flag!=0){
    if(this.password==this.confirm_password){
    let bodyData =
    {
      "name" : this.name,
      "email" : this.email,
      "password" : this.password,
    };
    this.http.post("http://localhost:9992/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Registered Successfully")
    });
  }
  else{
    alert("Confirm your password")
  }
  }
  else{
    alert("Invalid")
  }
}
 
  save()
  {
    this.register();
  }

}
