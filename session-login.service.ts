import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subscriber} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionLoginService {
  login_URL = 'http://127.0.0.1:8000/login/';
  logout_URL = 'http://127.0.0.1:8000/logout/';

  constructor(
    private httpClient: HttpClient
  ) { }

  login(pusername,pPassword) { 
    const loginData= {
      username: pusername,
      password: pPassword};
   return this.httpClient.post(this.login_URL, loginData);}

   logout() {
    return this.httpClient.post(this.logout_URL, {});
  }
  
  
  
  
  }
