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

  addNewTask(task:tasks){ //This is a post function in order to post in the database the tasks
    return this.http.post(this.url + "addtasks.php", task);
  }

  getTasks(user_id:any){
    return this.http.get(this.url + "viewtasks.php?user_id="+user_id);
  }


}
