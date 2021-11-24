import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { UpdateServiceDialogComponent } from './components/update-service-dialog/update-service-dialog.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AddServiceComponent,
    UpdateServiceDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
