import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent {
  selected = 'option2';
  BusForm: FormGroup | any;
  constructor(private formbuilder: FormBuilder, private api: ApiService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.BusForm = new FormGroup({
      fromcity: new FormControl('', [Validators.required,]),
      ToCity: new FormControl('', [Validators.required,]),
      checkIn: new FormControl('', [Validators.required,]),
      checkOut: new FormControl('', [Validators.required,]),

    });
    const toSelect = this.toppingList.find((c) => c.id == 1);
    this.BusForm.get('fromcity').setValue(toSelect);

    const toclass = this.classList.find((c) => c.id == 1);
    this.BusForm.get('ToCity').setValue(toclass);
  }

  toppingList = [
    {
      id: 1,
      name: 'Mumbai',
    },
    {
      id: 2,
      name: 'Pune',
    },
    {
      id: 3,
      name: 'Hydrabad'
    },
    {
      id: 4,
      name: 'Thane'
    },
    {
      id: 5,
      name: 'csmt'
    },
    {
      id: 6,
      name: 'Delhi'
    },
    {
      id: 7,
      name: 'Surat'
    },
    {
      id: 8,
      name: 'Gujrat'
    },
    {
      id: 9,
      name: 'uttar Pradesh'
    },
    {
      id: 10,
      name: 'Borivali'
    },
    {
      id: 11,
      name: 'Goa'
    },

  ];

  classList = [
    {
      id: 1,
      name: 'Mumbai',
    },
    {
      id: 2,
      name: 'Hyderabad',
    },
    {
      id: 3,
      name: 'Indore'
    },
    {
      id: 4,
      name: 'Jaipur'
    },
    {
      id: 5,
      name: 'bangalore'
    },
    {
      id: 6,
      name: 'Bhopal'
    },
    {
      id: 7,
      name: 'Chennai'
    },
    {
      id: 8,
      name: 'Delhi'
    },
    {
      id: 4,
      name: 'Goa'
    },
    {
      id: 9,
      name: 'Indore'
    },
  ];

  onBusSubmit() {
    console.log(this.BusForm.value);
    if (this.BusForm.valid) {
      this.api.BookBus(this.BusForm.value)
        .subscribe({
          next: (res) => {
            this.toastr.success('details added successfully', 'successfully', { timeOut: 2000, });
            this.BusForm.reset();
          },
          error: () => {
            this.toastr.error('error while adding  the data', 'error', { timeOut: 2000, });
          }
        })
    }
  }

  
}
