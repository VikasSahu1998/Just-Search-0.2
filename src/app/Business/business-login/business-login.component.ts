import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-business-login',
  templateUrl: './business-login.component.html',
  styleUrls: ['./business-login.component.scss']
})
export class BusinessLoginComponent {

  public showPassword: boolean = false;
  singinForm: FormGroup | any;

  constructor(private formbuilder: FormBuilder,private router: Router, private toastr: ToastrService, private api: ApiService) { }
  ngOnInit(): void {
    this.singinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),

    },

    );
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // onsinginsubmit() {
  //   this.http.get<any>("http://localhost:3000/signup").subscribe(res => {
  //     const user = res.find((a: any) => {
  //       return a.email === this.singinForm.value.email && a.password === this.singinForm.value.password

  //     })
  //     if (user) {
  //       alert("signin Succesfully");
  //       this.singinForm.reset();
  //       this.dialogref.close('save');
  //       this.router.navigate(['Home']);

  //     } else {
  //       alert("user not found");
  //     }

  //   }, err => {
  //     alert("server error");
  //   }
  //   )
  // }



  onsinginsubmit() {
    this.api.getLogin()
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.singinForm.value.email && a.password === this.singinForm.value.password

        })
        if (user) {
          this.toastr.success('Signin successfully', 'successfully', { timeOut: 2000, });
          this.singinForm.reset();
          
          this.router.navigate(['Home']);

        } else {
          this.toastr.error('user not found', 'error', { timeOut: 2000, });
        }

      }, err => {
        this.toastr.error('Server error', 'error', { timeOut: 2000, });
      }
      )
  }

 
}
