import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  apiUrl = 'http://127.0.0.1:8000/update';
  irl = 'http://127.0.0.1:8000/changer';

  constructor(private http: HttpClient) { }

  updateData(id: number, data: any) :Observable<any> {
      const Url = `${this.apiUrl}/${id}`;
      return this.http.put(Url, data);
  }

  update(id: number, data: any) :Observable<any> {
    const Url = `${this.irl}/${id}`;
    return this.http.put(Url, data);
}
}
