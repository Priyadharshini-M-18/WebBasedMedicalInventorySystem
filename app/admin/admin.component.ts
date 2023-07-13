import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private router: Router,private http: HttpClient) {}
 upload()
 {
  this.router.navigate(['/upload']);
 }
 remove()
 {
  this.router.navigate(['/remove']);
 }
 update()
 {
  this.router.navigate(['/update']);
 }
 viewOrders(){
  this.router.navigate(['trackSale']);
 }

}
