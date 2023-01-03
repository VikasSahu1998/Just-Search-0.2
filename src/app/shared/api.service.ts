import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  opts = [];
  constructor(private http: HttpClient) { }
  postSingup(data: any) {
    return this.http.post<any>("http://localhost:3000/signup/", data);
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
    return this.http.get<any>("http://localhost:3000/signup/");
  }

  getCountries() {
    return this.opts.length ?
      of(this.opts) :
      this.http.get<any>("https://restcountries.com/v3.1/all").pipe(tap(data => this.opts = data))
  }

  public getIPAddress() {
    return this.http.get("https://api64.ipify.org?format=json");
  }
  // putEmp(data: any, id: number) {
  //   return this.http.put<any>("http://localhost:3000/emplist/" + id, data);
  // }

  // deleteEmp(id: number) {
  //   return this.http.delete<any>("http://localhost:3000/emplist/" + id);
  // }
}