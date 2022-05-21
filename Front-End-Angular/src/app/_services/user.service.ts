import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServeUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(`${this.apiServeUrl}/api/test/all`, { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(`${this.apiServeUrl}/api/test/user`, { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(`${this.apiServeUrl}/api/test/mod`, { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(`${this.apiServeUrl}/api/test/admin`, { responseType: 'text' });
  }
   public getUser():Observable<persona>{
    return this.http.get<persona>(`${this.apiServeUrl}/persona/id/1`); 
  }
 
  public updatePersona(persona:persona):Observable<persona>{
    return this.http.put<persona>(`${this.apiServeUrl}/persona/update`,persona);
  }
} 