import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class UserService {
  register() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }
  registerNewUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/register/', userData);   
  }
}
