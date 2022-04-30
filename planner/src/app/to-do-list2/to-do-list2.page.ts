import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tasks, TasksService } from '../apis/tasks.service';

@Component({
  selector: 'app-to-do-list2',
  templateUrl: './to-do-list2.page.html',
  styleUrls: ['./to-do-list2.page.scss'],
})
export class ToDoList2Page implements OnInit {

  task:any=[];

  constructor(private router: Router, private service:TasksService) { }

  ngOnInit() {

    this.TASK();
  }

  profile(){
    this.router.navigate(['profile']);
  }
  todo(){
    this.router.navigate(['to-do-list']);
  }
  todo2(){
    this.router.navigate(['to-do-list2']);
  }

  TASK(){
    this.service.getTasks(localStorage.getItem("user_id")).subscribe(response =>{
      this.task=response;
    }
    ,(error:any)=>{
      console.log("Error task",error);
    }
)
  }

}
