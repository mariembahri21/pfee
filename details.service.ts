import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDetailService {

  apiUrl = 'http://127.0.0.1:8000/detail/';

  constructor(private http: HttpClient) { }

  postDetail(detail: any): Observable<any> {
    return this.http.post(this.apiUrl, detail);
  }
  



}