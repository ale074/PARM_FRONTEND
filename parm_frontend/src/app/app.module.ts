import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AddServiceComponent } from './servicios/components/add-service/add-service.component';
import { UpdateServiceDialogComponent } from './servicios/components/update-service-dialog/update-service-dialog.component';
import { AddAlertComponent } from './alertas/components/add-alert/add-alert.component';
import { UpdateAlertComponent } from './alertas/components/update-alert/update-alert.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AddServiceComponent,
    UpdateServiceDialogComponent,
    AddAlertComponent,
    UpdateAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
