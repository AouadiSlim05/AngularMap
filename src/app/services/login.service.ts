import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable()
export class LoginService {


  constructor(private http: HttpClient) { }

  logIn(username, password)
  {
    return this.http.get('http://localhost:18080/InfinityMAP-web/rest/authentification/login?username=' +  username + '&password=' +password);

  }
}

                                                 
