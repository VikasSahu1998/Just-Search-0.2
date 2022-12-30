import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-care',
  templateUrl: './auto-care.component.html',
  styleUrls: ['./auto-care.component.scss']
})
export class AutoCareComponent {

  cards = [
    {
      title: 'Car Repair',
    },
    {
      title: 'Car Tyres',
    },
    {
      title: 'Car Batteries',
    },
    {
      title: 'Car Assosaries',
    },
    {
      title: 'Car Wash',
    },
    {
      title: 'Motorcycle Repair',
    },
    {
      title: 'Two Wheeler Tyres',
    },
    {
      title: 'Two Wheeler Batteries ',
    },
    {
      title: 'Two Wheeler Assosaries ',
    },
  ]
}
