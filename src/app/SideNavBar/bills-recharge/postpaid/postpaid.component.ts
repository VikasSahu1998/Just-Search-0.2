import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-postpaid',
  templateUrl: './postpaid.component.html',
  styleUrls: ['./postpaid.component.scss']
})
export class PostpaidComponent implements OnInit {

  selected = 'option2';
  PrepaidForm: FormGroup | any;
  constructor(private formbuilder: FormBuilder, private api: ApiService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.PrepaidForm = new FormGroup({
      Mobile: new FormControl('', [Validators.required,]),
      Network: new FormControl('', [Validators.required,]),
      Amount: new FormControl('', [Validators.required,]),
     

    });


    const toclass = this.classList.find((c) => c.id == 3);
    this.PrepaidForm.get('class').setValue(toclass);
  }



  classList = [
    {
      id: 1,
      name: 'Airtel',
    },
    {
      id: 2,
      name: 'Jio',
    },
    {
      id: 3,
      name: 'BSNL'
    },
     {
      id: 4,
      name: 'Vodafone Idea'
    },
    {
      id: 1,
      name: 'MTNL Delhi',
    },
    {
      id: 1,
      name: 'MTNL Mumbai',
    },
  ];

  

  onRechargeSubmit() {
    if (this.PrepaidForm.valid) {
      this.api.Postpaid(this.PrepaidForm.value)
        .subscribe({
          next: (res) => {
            this.toastr.success('details added successfully', 'successfully', { timeOut: 2000, });
            this.PrepaidForm.reset();
          },
          error: () => {
            this.toastr.error('error while adding  the data', 'error', { timeOut: 2000, });
          }
        })
    }
  }

  value = 0;

  handleMinus() {
    this.value--;
  }
  handlePlus() {
    this.value++;
  }

}
