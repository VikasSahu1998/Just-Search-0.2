import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BusinessLoginComponent } from '../business-login/business-login.component';

@Component({
  selector: 'app-business-home',
  templateUrl: './business-home.component.html',
  styleUrls: ['./business-home.component.scss']
})
export class BusinessHomeComponent {
  
  constructor( public dialog: MatDialog,) { }
  Onsignin() {
    this.dialog.open(BusinessLoginComponent, {
      width: '27%',
    })
    
  }
}
