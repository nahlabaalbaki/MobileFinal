import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TasksService } from '../apis/tasks.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
})
export class ToDoListPage implements OnInit {
  private mytoast:any;
  constructor(private router: Router,
    private service:TasksService,
    private toast: ToastController) { }

    onSubmit(form:NgForm){
      
      var task= form.value;
      task["user_id"]=localStorage.getItem("user_id");
   

      if(task.task===''){
        this.show('Please fill out the required fields');
      }else{
       
      this.service.addNewTask(task).subscribe(response =>{
        
        this.show('Tasks Saved');
        this.router.navigate(['to-do-list2']);
        
      },(error:any)=>{
        console.log("Error task",error);
      }
  
      );
    }
     
  }
  show(message: string) { //This is a toast function that appears to the user when the action being performed is successful.
    this.mytoast = this.toast.create({
      message: message,
      duration: 2000
    }).then((toastdata) => {
      console.log(toastdata);
      toastdata.present();
    });
  }


  ngOnInit() {
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
  
}
