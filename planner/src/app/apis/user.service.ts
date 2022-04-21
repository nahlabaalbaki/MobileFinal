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
export class UserService {

  private url = "http://localhost/Server/";
  
  constructor(private http: HttpClient) {}


    addNewUser(user:users){ //This is a post function in order to post in the database
      return this.http.post(this.url + "signup.php", JSON.stringify(user));
    }

    getUsertoLogin(){ //this isa get function used for when want to login
      return this.http.get<[users]>(this.url + "login.php");
    }
    
    getSingleUserProfile(){ //this is a get function used for when we want to view profile
      return this.http.get<[users]>(this.url + "profile.php");
    }

    changePassword(user:users){ //This is a post function used for when password is changed
      return this.http.post(this.url + "password.php", JSON.stringify(user.password));
    }

}


