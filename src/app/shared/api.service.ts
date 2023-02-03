import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { addDoc, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { addService } from './addservice';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  opts = [];
  constructor(private http: HttpClient, private fs: Firestore) { }
  postSingup(data: any) {
    return this.http.post<any>("https://my-project-507f0-default-rtdb.firebaseio.com/signup.json/", data);
  }

  postCategories(data: any) {
    return this.http.post<any>("https://my-project-507f0-default-rtdb.firebaseio.com/clientNeed.json/", data);
  }

  postAirticket(data: any) {
    return this.http.post<any>("https://my-project-507f0-default-rtdb.firebaseio.com/Airticket.json/", data);
  }

  postTrain(data: any) {
    return this.http.post<any>("https://my-project-507f0-default-rtdb.firebaseio.com/train.json/", data);
  }
  getLogin() {
    return this.http.get<any>("https://my-project-507f0-default-rtdb.firebaseio.com/signup.json/");
  }
  Prepaid(data: any) {
    return this.http.post<any>("https://my-project-507f0-default-rtdb.firebaseio.com/Prepaid.json/", data);
  }
  Postpaid(data: any) {
    return this.http.post<any>("https://my-project-507f0-default-rtdb.firebaseio.com/Postpaid.json/", data);
  }
  BookHotel(data: any) {
    return this.http.post<any>("https://my-project-507f0-default-rtdb.firebaseio.com/BookHotel.json/", data);
  }
  BookBus(data: any) {
    return this.http.post<any>("https://my-project-507f0-default-rtdb.firebaseio.com/BookBus.json/", data);
  }
    
    
  getCountries() {
    return this.opts.length ?
      of(this.opts) :
      this.http.get<any>("https://restcountries.com/v3.1/all").pipe(tap(data => this.opts = data))
  }

  public getIPAddress() {
    return this.http.get("https://api64.ipify.org?format=json");
  }

  //Add New
  addService(service: addService) {
    service.id = doc(collection(this.fs, 'id')).id
    return addDoc(collection(this.fs, 'Services'), service)
  }

  //get All notes form firebase
  getService(): Observable<addService[]> {
    let servicesRef = collection(this.fs, 'Services')
    return collectionData(servicesRef, { idField: 'id' }) as Observable<addService[]>
  }

  //Delete Notes Form Firebase
  deleteService(service: addService) {
    let docref = doc(this.fs, `Services/${service.id}`);
    return deleteDoc(docref)
  }

  // putEmp(data: any, id: number) {
  //   return this.http.put<any>("http://localhost:3000/emplist/" + id, data);
  // }

  // deleteEmp(id: number) {
  //   return this.http.delete<any>("http://localhost:3000/emplist/" + id);
  // }
}