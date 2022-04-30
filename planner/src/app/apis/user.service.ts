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


    addNewUser(user:users){//This is a post function. It takes name,username, email and password as input from the user
      return this.http.post(this.url + "signup.php", user);// and adds it in the database as a new record.
    }

    getUsertoLogin(username:string, password:string){//The following is a get function. It gets the username and (hashed) password from database
      return this.http.get<[users]>(this.url + 'login.php?username=' + username+ '&password='+password);//and the users will be able to login to his/her account.
    }
    
    getUserProfile(user_id:any){//The following is a get function. It gets the name,username,email of the user from database and the user will be able to view the
      return this.http.get<[users]>(this.url + "profile.php?user_id="+user_id);//their profile.
    }

    changePassword(user:users, user_id:any){ //This is a post function. It posts the new password of the user as hashed in the database after it being inputed
      return this.http.post(this.url + "password.php?user_id="+user_id,user);//by the user.
    }
    editProfile(user:users, user_id:any){ //This is a post function. It posts the new name, username, email of the user in the database replacing thr old records.
      return this.http.post(this.url + "editprofile.php?user_id="+user_id,user);
    }
}


