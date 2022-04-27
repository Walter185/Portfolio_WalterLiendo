import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Data } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private httpClient:HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get('./assets/data/data.json');
  }
  saveData(data:Data): Observable<any> {
    return this.httpClient.post<Data>('./assets/data/data.json', data, httpOptions);
  }
}