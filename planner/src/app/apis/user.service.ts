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
      return this.http.post(this.url + "signup.php", user);
    }

    getUsertoLogin(username:string, password:string){ //this is a get function used for to login
      return this.http.get<[users]>(this.url + 'login.php?username=' + username+ '&password='+password);
    }
    
    getUserProfile(user_id:any){ //this is a get function used for when we want to view profile
      return this.http.get<[users]>(this.url + "profile.php?user_id="+user_id);
    }

    changePassword(user:users, user_id:any){ //This is a post function used for when password is changed
      return this.http.post(this.url + "password.php?user_id="+user_id,user);
    }
    editProfile(user:users, user_id:any){ //This is a post function used for when profile is changed
      return this.http.post(this.url + "editprofile.php?user_id="+user_id,user);
    }
}


