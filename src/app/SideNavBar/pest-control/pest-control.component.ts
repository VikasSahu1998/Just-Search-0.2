import { Component } from '@angular/core';

@Component({
  selector: 'app-pest-control',
  templateUrl: './pest-control.component.html',
  styleUrls: ['./pest-control.component.scss']
})
export class PestControlComponent {
  cards = [
    {
      title: 'Cockroach',
    },
    {
      title: 'Ant',
    },
    {
      title: 'Termites',
    },
    {
      title: 'Bedbugs',
    },
    {
      title: 'Mosquitoes',
    },
  ]
}
