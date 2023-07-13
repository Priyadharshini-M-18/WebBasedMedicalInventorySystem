import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent {

  id: string ="";
  name: string ="";

  

  constructor(private router: Router,private http: HttpClient) {
    
  }
  
  public remove() {
    
 
    let bodyData = {
      "id": this.id,
      "name": this.name
    };
    
    
      
        this.http.post("http://localhost:9992/remove",bodyData).subscribe((resultData: any) => {
        console.log(resultData);
 
        if (resultData.status)
        {
          
          alert("Stock Removed")
        }
        else
         {
          alert("Incorrect Stock")
          console.log("Errror login");
        }
      });
    }

}
