import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogComponent} from './log/log.component';
import { CanActivate } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { RemoveComponent } from './remove/remove.component';
import { AdminComponent } from './admin/admin.component';
import { UploadComponent } from './upload/upload.component';
import { ProfileComponent } from './log/profile/profile.component';
import { UpdateComponent } from './update/update.component';
import { ViewOrdersComponent } from './log/view-orders/view-orders.component';
import { TrackSaleComponent } from './track-sale/track-sale.component';
import { AdmComponent } from './adm/adm.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HistoryComponent } from './history/history.component';
import { CustomerComponent } from './customer/customer.component';
import { SearchComponent } from './search/search.component';
import { SearchOrderComponent } from './search-order/search-order.component';
import { CActivateGuard } from './cactivate.guard';




const routes: Routes = [
  
  {path:'',component:SignupComponent},
  {path:'searchOrders',component:SearchOrderComponent,canActivate:[CActivateGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[CActivateGuard]},
  {path:'adm',component:AdmComponent,canActivate:[CActivateGuard]},
  {path:'customerDetails',component:CustomerDetailsComponent},
  {path:'history',component:HistoryComponent,canActivate:[CActivateGuard]},
  {path:'customer',component:CustomerComponent,canActivate:[CActivateGuard]},
  {path:'upload',component:UploadComponent,canActivate:[CActivateGuard]},
  {path:'remove',component:RemoveComponent,canActivate:[CActivateGuard]},
  {path:'login',component:LogComponent},
  {path:'admin',component:AdminComponent,canActivate:[CActivateGuard]},
  {path:'update',component:UpdateComponent,canActivate:[CActivateGuard]},
  {path:'viewOrders',component:ViewOrdersComponent,canActivate:[CActivateGuard]},
  {path:'trackSale',component:TrackSaleComponent,canActivate:[CActivateGuard]},
  {path:'search',component:SearchComponent,canActivate:[CActivateGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
