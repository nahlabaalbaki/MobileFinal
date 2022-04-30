import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

export interface tasks{

  tasks: string,
  user_id:any,
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private url = "http://localhost/Server/";

  constructor(private http:HttpClient) { }

  addNewTask(task:tasks){ //The following is a post function. It takes tasks as input from the user and adds it in the database.
    return this.http.post(this.url + "addtasks.php", task);
  }

  getTasks(user_id:any){//The following is a get function. It gets the tasks from database and the users will be able to view the
    return this.http.get(this.url + "viewtasks.php?user_id="+user_id);//tasks addedd previously by him/her
  }


}
