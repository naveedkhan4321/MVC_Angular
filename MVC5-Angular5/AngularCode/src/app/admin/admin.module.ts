import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { EmailsComponent } from './emails/emails.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, EmailsComponent, UsersComponent]
})
export class AdminModule { }
