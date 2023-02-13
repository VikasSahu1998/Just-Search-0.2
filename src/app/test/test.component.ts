import { Component, OnInit } from '@angular/core';
import {
  collectionData,
  collection,
  query,
  Firestore,
} from '@angular/fire/firestore';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { addService } from '../shared/addservice';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public searchField: FormControl;

  public Services$!: Observable<addService[]>;

  constructor(private readonly firestore: Firestore) {
    this.searchField = new FormControl('');
  }

  async ngOnInit() {
    const searchTerm$ = this.searchField.valueChanges.pipe(
      startWith(this.searchField.value)
    );

    const Services$ = collectionData(
      query(collection(this.firestore, 'Services'))
    ) as Observable<addService[]>;

    this.Services$ = combineLatest([Services$, searchTerm$]).pipe(
      map(([Services, searchTerm]) =>
        Services.filter(
          (addService) =>
            searchTerm === '' ||
            addService.Service_name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }
}

