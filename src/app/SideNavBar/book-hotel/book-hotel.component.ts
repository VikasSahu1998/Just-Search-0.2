import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-book-hotel',
  templateUrl: './book-hotel.component.html',
  styleUrls: ['./book-hotel.component.scss']
})
export class BookHotelComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  email: any;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  selected = 'option2';
  HotelForm: FormGroup | any;
  constructor(private formbuilder: FormBuilder, private api: ApiService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.HotelForm = new FormGroup({
      hotel: new FormControl('', [Validators.required,]),
      checkIn: new FormControl('', [Validators.required,]),
      checkOut: new FormControl('', [Validators.required,]),
      RoomBook: new FormControl('', [Validators.required,]),
      AdultForm: new FormControl('', [Validators.required,]),
      Childform: new FormControl('', [Validators.required,]),
      number: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required,]),
    
    });
    this.email = new FormControl('', [Validators.required, Validators.email]);
    
    
  }

  

  

  onHotelSubmit() {
    if (this.HotelForm.valid) {
      this.api.BookHotel(this.HotelForm.value)
        .subscribe({
          next: (res) => {
            this.toastr.success('details added successfully', 'successfully', { timeOut: 2000, });
            this.HotelForm.reset();
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
