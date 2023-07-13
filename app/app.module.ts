import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LogComponent } from './log/log.component';
import { AdminComponent } from './admin/admin.component';
import { UploadComponent } from './upload/upload.component';
import { ProfileComponent } from './log/profile/profile.component';
import { RemoveComponent } from './remove/remove.component';
import { UpdateComponent } from './update/update.component';
import { ViewOrdersComponent } from './log/view-orders/view-orders.component';
import { TrackSaleComponent } from './track-sale/track-sale.component';
import { AdmComponent } from './adm/adm.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HistoryComponent } from './history/history.component';
import { CustomerComponent } from './customer/customer.component';
import { SearchComponent } from './search/search.component';
import { DatePipe } from '@angular/common';
import { SearchOrderComponent } from './search-order/search-order.component';




@NgModule({

  declarations: [
    AppComponent,
    SignupComponent,
    LogComponent,
    AdminComponent,
    UploadComponent,
    ProfileComponent,
    RemoveComponent,
    UpdateComponent,
    ViewOrdersComponent,
    TrackSaleComponent,
    AdmComponent,
    CustomerDetailsComponent,
    HistoryComponent,
    CustomerComponent,
    SearchComponent,
    SearchOrderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
