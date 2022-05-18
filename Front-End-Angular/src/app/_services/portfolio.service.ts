import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Data } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('./assets/data/data.json');
  }

}
