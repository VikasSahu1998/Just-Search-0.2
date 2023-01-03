import { Component } from '@angular/core';

@Component({
  selector: 'app-baby-care',
  templateUrl: './baby-care.component.html',
  styleUrls: ['./baby-care.component.scss']
})
export class BabyCareComponent {
  cards = [
    {
      title: 'Baby Food',
    },
    {
      title: 'Baby Sitters ',
    },
    {
      title: 'Baby Bedding',
    },
    {
      title: 'Bath',
    },
    {
      title: 'Cloths',
    },
    {
      title: 'Creams',
    },
    {
      title: 'Diapers',
    },
    {
      title: 'Footware',
    },
    {
      title: 'Groming',
    },
    {
      title: 'Toys',
    }
  ]
}
