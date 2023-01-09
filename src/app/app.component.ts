import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from './shared/api.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Just-Search';
 
  user !:string;
  //button text variable
  btnVal = "LogIn";
  constructor(private router: Router, public dialog: MatDialog, private api: ApiService,) { }
  ngOnInit() {
    // this.getdata();
   
    
  }
  Onhome(): void {
    this.router.navigate(['/']);
  }

  Onsignin() {
    this.dialog.open(SignInComponent, {
      width: '27%',
    })
    this.btnVal = "LogOut"
  }

  Oncategories(): void {
    this.router.navigate(['Categories']);
  }


  // getdata() {
  //   this.api.getLogin().subscribe((res: any) => {
  //     // console.log(res);
  //       this.user = res['0'].name;
  //   });
  // }
}
