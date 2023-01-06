import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent {

  addServiceForm : FormGroup |any;
  constructor(private formbuilder: FormBuilder,private http: HttpClient, private api: ApiService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.addServiceForm = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      product: new FormControl('', [Validators.required,]),
      
    },
   
    );
  }

  oncategoriesubmit(){
    if(this.addServiceForm.valid){
      this.api.postCategories(this.addServiceForm.value)
      .subscribe({
        next:(res)=>{
          this.toastr.success('details added successfully', 'successfully', { timeOut: 2000, });
          console.log("feedback redodeed");
          this.addServiceForm.reset();
         },
         error: () => {
          this.toastr.error('error while adding  the data', 'error', { timeOut: 2000, });
         }
      })
    }
  }

}
