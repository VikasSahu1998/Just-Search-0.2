import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
 
  categoriesForm : FormGroup |any;

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private api: ApiService,private toastr: ToastrService) { }

  cards = [
    {
      title: 'RESTAURANTS',
      description1: 'Online order',
      description2: 'Book Table ',
      description3: ' Trending,More...',

      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/restaurant.jpg'
    },
    {
      title: 'DOCTORS',
      description1: 'Dentists',
      description2: 'Dermatologists ',
      description3: ' ENT,More...',
      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/Doctors.jpg'
    },
    {
      title: 'REAL ESTATE',
      description1: 'Buy',
      description2: 'Rent',
      description3: 'Sell,PG/Coliving',

      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/real_estate1.jpg'
    },
    {
      title: 'SHOP ONLINE',
      description1: 'Mobile',
      description2: 'Electronics',
      description3: ' Beauty,More...',

      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/hm-shopfront.jpg'
    },
    {
      title: 'TRAVEL',
      description1: 'Flights',
      description2: 'Bus ',
      description3: 'Train,More...',

      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/travel.jpg'
    },
    {
      title: 'REPAIR',
      description1: 'AC,TV',
      description2: 'Washing Machine',
      description3: 'Refrigerator,More...',
      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/repairs.jpg'
    },
    {
      title: 'LOANS',
      description1: 'Credit Card',
      description2: 'Home Loans',
      description3: 'Personal Loans,More...',

      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/loans.jpg'
    },
    {
      title: 'AUTO MOBILES',
      description1: 'New Car',
      description2: 'Used Car',
      description3: 'Car Insurance,More...',

      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/automobile.jpg'
    },
    {
      title: 'ON DEMAND SERVICE',
      description1: 'Plumber',
      description2: 'Pest control ',
      description3: 'More...',

      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/ondemand.jpg'
    },
    {
      title: 'WEDDING',
      description1: 'Banquet Hall',
      description2: 'Bridal Requisites',
      description3: 'Caterers,More...',
      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/wedding.jpg'
    },
    {
      title: 'JOBS',
      description1: 'Placement Service',
      description2: 'Search Jobs',
      description3: 'Overseas Jobs,More...',

      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/jobs-compressor.jpg'
    },
    {
      title: 'PERSONAL CARE',
      description1: 'Beauty Parlours',
      description2: 'Spas',
      description3: 'Salons,More...',

      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/personal_care.jpg'
    },
    {
      title: 'DAILY NEEDS',
      description1: 'Glocery',
      description2: 'Chemists',
      description3: 'Bakery,More...',

      img: 'https://akam2.cdn.jdmagicbox.com/images/icontent/jdrwd_new/daily.jpg'
    },
    {
      title: 'FLOWERS',
      description1: 'Florists',
      description2: 'Flower Shop',
      description3: '24 Hour Florists,More...',

      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/flower.jpg'
    },
     ];

  ngOnInit(): void {
    this.categoriesForm = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      product: new FormControl('', [Validators.required,]),
      
    },
   
    );
  }

  // oncategoriesubmit() {
  //   this.http.post<any>("http://localhost:3000/need", this.categoriesForm.value).subscribe(res => {
  //     alert("signup Succesfully");
  //     this.categoriesForm.reset();
      
  //   }, err => {
  //     alert("error");
  //   }
  //   )
  // }

  oncategoriesubmit(){
    if(this.categoriesForm.valid){
      this.api.postCategories(this.categoriesForm.value)
      .subscribe({
        next:(res)=>{
          this.toastr.success('details added successfully', 'successfully', { timeOut: 2000, });
          console.log("feedback redodeed");
          this.categoriesForm.reset();
         },
         error: () => {
          this.toastr.error('error while adding  the data', 'error', { timeOut: 2000, });
         }
      })
    }
  }

}
