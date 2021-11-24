import { Component, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddAlertComponent } from 'src/app/alertas/components/add-alert/add-alert.component';
import { UpdateAlertComponent } from 'src/app/alertas/components/update-alert/update-alert.component';
import { AddServiceComponent } from 'src/app/servicios/components/add-service/add-service.component';
import { UpdateServiceDialogComponent } from 'src/app/servicios/components/update-service-dialog/update-service-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    @Optional() public dialogRef: MatDialogRef<DashboardComponent>,
    public dialog: MatDialog) { }

  OpenDialog(action: any, obj: any) {
    if (action === 'openAddService') {
      obj.action = action;
      const dialogRef = this.dialog.open(AddServiceComponent, {
        data: obj,
        maxWidth: '900px'
      })

    } else if (action === 'openUpdateService') {
      obj.action = action;
      const dialogRef = this.dialog.open(UpdateServiceDialogComponent, {
        data: obj,
        maxWidth: '900px'
      })

    }
    else if (action === 'openAddAlert') {
      obj.action = action;
      const dialogRef = this.dialog.open(AddAlertComponent, {
        data: obj,
        maxWidth: '900px'
      })

    }
    else if (action === 'openUpdateAlert') {
      obj.action = action;
      const dialogRef = this.dialog.open(UpdateAlertComponent, {
        data: obj,
        maxWidth: '900px'
      })

    }

  }

  ngOnInit(): void {
  }

}
