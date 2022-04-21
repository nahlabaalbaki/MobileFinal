import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface users{
  id: string,
  name: string,
  username: string,
  password: string,
  email:string
}


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private url = "http://localhost/Server/";
  
  constructor(private http: HttpClient) {}

    // getAllusers(){
    //   return this.http.get<[users]>(this.url + "signup.php");
    // }

    addNewUser(user:users){ //This is a post function
      return this.http.post(this.url + "signup.php", JSON.stringify(user));
    }
}


