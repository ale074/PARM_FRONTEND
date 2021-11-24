import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { UpdateServiceDialogComponent } from './components/update-service-dialog/update-service-dialog.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'add-service', component: AddServiceComponent },
      { path: 'update-service', component: UpdateServiceDialogComponent},
      { path: '**', redirectTo: 'add-service'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
