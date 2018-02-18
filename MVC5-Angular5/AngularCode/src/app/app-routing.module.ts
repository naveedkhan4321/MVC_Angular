import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { EmailsComponent } from './admin/emails/emails.component';
import { EmployeeComponent } from './employees/employee/employee.component';


const routes: Routes = [

  { path: '',    pathMatch: 'full', redirectTo: 'dashboard'  },
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'items', component: ItemsComponent },
  { path: 'employees', component: EmployeeComponent },

  

  {
    path: 'admin', component: AdminComponent,
    children:
      [
        //{ path: '', component: UsersComponent },
        { path: 'users', component: UsersComponent },
        { path: 'emails', component: EmailsComponent }
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
