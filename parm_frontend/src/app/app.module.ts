import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './usuarios/components/login/login.component';
import { RegisterComponent } from './usuarios/components/register/register.component';
import { DashboardComponent } from './usuarios/components/dashboard/dashboard.component';
import { AddServiceComponent } from './servicios/components/add-service/add-service.component';
import { UpdateServiceDialogComponent } from './servicios/components/update-service-dialog/update-service-dialog.component';
import { AddAlertComponent } from './alertas/components/add-alert/add-alert.component';
import { UpdateAlertComponent } from './alertas/components/update-alert/update-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddServiceComponent,
    UpdateServiceDialogComponent,
    AddAlertComponent,
    UpdateAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
