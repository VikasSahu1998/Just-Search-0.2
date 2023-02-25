import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/api.service';
import { addService } from 'src/app/shared/addservice'

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent {


  serviceDetails: any;
  serviceData: any = [];
  serviceObj: addService = {
    id: '',
    Service_name: '',
    Service_email: '',
    Service_product: '',
    Service_number: '',
    Service_address: '',
    Service_Details: '',
    Service_Price: '',
    Service_img: undefined,
    Service_Pbrand: '',
    Service_categories: ''
  }

  addServiceForm: FormGroup | any;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private api: ApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.addServiceForm = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      Pbrand: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      product: new FormControl('', [Validators.required,]),
      number: new FormControl('', [Validators.required,]),
      address: new FormControl('', [Validators.required,]),
      Price: new FormControl('', [Validators.required,]),
      Details: new FormControl('', [Validators.required,]),
      Url: new FormControl('', [Validators.required,]),
      categories : new FormControl('', [Validators.required,]),
    },);
    this.getAllNotes()
  }

  oncategoriesubmit() {
    const { value } = this.addServiceForm;
    this.serviceObj.id = '',
      this.serviceObj.Service_name = value.name,
      this.serviceObj.Service_Pbrand = value.Pbrand,
      this.serviceObj.Service_email = value.email;
    this.serviceObj.Service_product = value.product,
      this.serviceObj.Service_number = value.number;
    this.serviceObj.Service_Price = value.Price;
    this.serviceObj.Service_address = value.address;
    this.serviceObj.Service_Details = value.Details;
    this.serviceObj.Service_img = value.Url;
    this.serviceObj.Service_categories=value.categories;
    if (this.addServiceForm.valid) {
      this.api.addService(this.serviceObj).then((service) => {
        if (service) {
          alert("Data added")
          this.addServiceForm.reset();
        }
      })
    }
  }

  //get data from firebase
  getAllNotes() {
    this.api.getService().subscribe((res: addService[]) => {
      // console.log(res);
      this.serviceData = res;
    })
  }

  categories = [
    {
      title: 'RESTAURANTS',
        },
    {
      title: 'DOCTORS',
    },
    {
      title: 'REAL ESTATE',
    },
    {
      title: 'SHOP ONLINE',
    },
    {
      title: 'TRAVEL',
    },
    {
      title: 'REPAIR',
    },
    {
      title: 'LOANS',
    },
    {
      title: 'AUTO MOBILES',
    },
    {
      title: 'ON DEMAND SERVICE',
    },
    {
      title: 'WEDDING',
    },
    {
      title: 'JOBS',
    },
    {
      title: 'PERSONAL CARE',
     
    },
    {
      title: 'DAILY NEEDS',
    },
    {
      title: 'FLOWERS',
    },
     ];
}

