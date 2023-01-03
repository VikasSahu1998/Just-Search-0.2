import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent {
  selected = 'option2';
  TrainticketForm: FormGroup | any;
  constructor(private formbuilder: FormBuilder, private api: ApiService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.TrainticketForm = new FormGroup({
      LeavingFrom: new FormControl('', [Validators.required,]),
      GoingTo: new FormControl('', [Validators.required,]),
      toppings: new FormControl('', [Validators.required,]),
      class: new FormControl('', [Validators.required,]),

    });
    const toSelect = this.toppingList.find((c) => c.id == 1);
    this.TrainticketForm.get('toppings').setValue(toSelect);

    const toclass = this.classList.find((c) => c.id == 3);
    this.TrainticketForm.get('class').setValue(toclass);
  }

  toppingList = [
    {
      id: 1,
      name: 'One Way',
    },
    {
      id: 2,
      name: 'Road Trip',
    },
    {
      id: 3,
      name: 'Multi-City'
    },
  ];

  classList = [
    {
      id: 1,
      name: 'First Ac',
    },
    {
      id: 2,
      name: 'Second Ac',
    },
    {
      id: 3,
      name: 'Third Ac'
    }, {
      id: 4,
      name: 'Second Class'
    },
    {
      id: 4,
      name: 'General'
    },
  ];

  onTrainticketSubmit() {
    if (this.TrainticketForm.valid) {
      this.api.postTrain(this.TrainticketForm.value)
        .subscribe({
          next: (res) => {
            this.toastr.success('details added successfully', 'successfully', { timeOut: 2000, });
            this.TrainticketForm.reset();
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
