import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { fromEvent, Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import { of } from "rxjs";
import { debounceTime, map, distinctUntilChanged, filter, startWith, switchMap } from "rxjs/operators";
import { Router } from '@angular/router';
import { ApiService } from "../shared/api.service";
import { FormControl } from "@angular/forms";
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { addService } from "../shared/addservice";
import { Firestore } from "@angular/fire/firestore";

import {
  collectionData,
  collection,
  query,
} from '@angular/fire/firestore';
import { combineLatest} from 'rxjs';



const APIKEY = "e8067b53";

const PARAMS = new HttpParams({
  fromObject: {
    action: "opensearch",
    format: "json",
    origin: "*"
  }
});


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isChecked: boolean = false;
  mode: string = 'light_mode';
  changed(event: MatSlideToggleChange): void {
    this.mode = event.checked ? 'nightlight_round' : 'light_mode';
    document.body.classList.toggle('darkMode');
  }
  @ViewChild('movieSearchInput', { static: true }) movieSearchInput!: ElementRef;
  apiResponse: any;
  isSearching!: boolean;

  public searchField!: FormControl;

  public Services$!: Observable<addService[]>;


  myControl = new FormControl();
  options = [];
  filteredOptions!: Observable<any[]>;

  constructor(private router: Router, private api: ApiService, private httpClient: HttpClient,private readonly firestore: Firestore) { this.isSearching = false; this.apiResponse = []; console.log(this.movieSearchInput);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
            return this.filter(val || '')
       }) 
    )
    this.searchField = new FormControl('');
  }


  filter(val: any): Observable<any[]> {
    // call the service which makes the http-request
    return this.api.getCountries()
     .pipe(
       map(response => response.filter((option: { name: { common: string; }; }) => { 
         return option.name.common.toLowerCase().indexOf(val.toLowerCase()) === 0
       }))
     )
   }  
  countryData = null;
  ngOnInit() {

    // console.log(this.movieSearchInput);
    this.api.getCountries().subscribe((data)=>{
      this.countryData = data;
  });


    fromEvent(this.movieSearchInput.nativeElement, 'keyup').pipe(

      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      , filter(res => res.length > 2)

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is diffent from current   
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {

      this.isSearching = true;

      this.searchGetCall(text).subscribe((res) => {
        // console.log('res', res);
        this.isSearching = false;
        this.apiResponse = res;
      }, (err) => {
        this.isSearching = false;
        // console.log('error', err);
      });

    });
  }

  Onhome(): void {
    this.router.navigate(['Home']);
  }

  // states: string[] = [
  //   'Andhra Pradesh',
  //   'ArunachalPradesh',
  //   'Assam',
  //   'Bihar',
  //   'Chhattisgarh',
  //   'Goa',
  //   'Gujarat',
  //   'Haryana',
  //   'HimachalPradesh	',
  //   'Jharkhand',
  //   'Karnataka',
  //   'Kerala',
  //   'MadhyaPradesh	',
  //   'Maharashtra',
  //   'Manipur',
  //   'Meghalaya',
  //   'Mizoram',
  //   'Nagaland',
  //   'Odisha',
  //   'Punjab',
  //   'Rajasthan',
  //   'Sikkim',
  //   'Tamil Nadu	',
  //   'Telangana',
  //   'Tripura',
  //   'UttarPradesh	',
  //   'Uttarakhand',
  //   'WestBengal	',
  // ];

  
  searchGetCall(term: string) {
    if (term === '') {
      return of([]);
    }
    return this.httpClient.get('http://www.omdbapi.com/?s=' + term + '&apikey=' + APIKEY, { params: PARAMS.set('search', term) });
  }


  
  async getSearch(searchField: any)
  {

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
            addService.Service_product.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    )
  }
}





