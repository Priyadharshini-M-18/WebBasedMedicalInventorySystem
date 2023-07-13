import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  email: string ='';
  password: string ='';
  email_id:string="";
  isLogin: boolean = false;
  erroMessage: string = "";
  name:string="";
  islogin=false;

  constructor(private router: Router,private http: HttpClient) {
    
  }
 
  
  ngOnInit(): void {
   
  }
  public login() {
    
    
    let bodyData = {
      email: this.email,
      password: this.password,
    };
   
    console.log(this.email);
    console.log(this.password);
      this.email_id=this.email;
      
        this.http.post("http://localhost:9992/login",bodyData).subscribe((resultData: any) => {
        console.log(resultData);
 
        if (resultData.status)
        {localStorage.setItem("email",this.email);
        localStorage.setItem("password",this.password);
          this.isLogin=true;
          alert("Login Successful")
          
          if(this.email=="admin@gmail.com"){
            this.islogin=true;
           
            this.router.navigate(['/adm'],{queryParams:{data:this.email}});
          }
          else{
            this.islogin=true;
            localStorage.setItem("email",this.email);
            localStorage.setItem("password",this.password);
            this.router.navigate(['/customer'],{queryParams:{data:this.email}});
          }
    
 
        }
        else
         {
          alert("Incorrect Email and Password")
          console.log("Errror login");
        }
      });
      
    }

}
