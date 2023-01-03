import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  cards = [
    {
      title: 'Literature & Fiction',
    },
    {
      title: 'Children & Young Adult ',
    },
    {
      title: 'Textbooks',
    },
    {
      title: 'Non-Fiction',
    },
    {
      title: 'Business & Economics',
    },
    {
      title: 'History',
    },
    
  ]
}
