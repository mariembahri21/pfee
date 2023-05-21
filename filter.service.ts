import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAbsents(date: string): Observable<any> {
    return this.http.get(`http://localhost:8000/filter/?date_absence=${date}`);
  }

  deleteData(pk: number) {
    const url = `http://localhost:8000/delete/${pk}/`;
    return this.http.delete(url);
  }

  delete(pk: number) {
    console.log(pk)
    const url = `http://localhost:8000/del/${pk}/`;
    return this.http.delete(url);
  }
  


}