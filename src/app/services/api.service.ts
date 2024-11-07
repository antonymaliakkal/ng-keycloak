import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiurl = 'http://localhost:8081/api'

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    console.log(this.http.get(`${this.apiurl}/admin`))
    return this.http.get(`${this.apiurl}/admin`);
  }
}
