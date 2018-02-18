import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';

import { HttpModule } from '@angular/http';
//import { EmployeeService } from './employees/shared/employee.service';
//import { EmployeeService } from '../shared/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemsComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
    //HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
