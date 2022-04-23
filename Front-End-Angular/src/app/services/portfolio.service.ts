import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private httpClient:HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get('./assets/data/data.json');
  }
  saveData(data:Data): Observable<any> {
    return this.httpClient.post('./assets/data/data.json', data);
  }
}