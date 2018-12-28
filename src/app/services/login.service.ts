import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { }

  logIn()
  {
   return this.http.get('http://localhost:18080/InfinityMAP-web/rest/authentification/login?username=slim&password=azerty');
    //return this.http.get('../assets/hotels.json');
  }
}