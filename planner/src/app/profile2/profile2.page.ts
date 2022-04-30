import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import {users, UserService } from '../apis/user.service';

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.page.html',
  styleUrls: ['./profile2.page.scss'],
})
export class Profile2Page implements OnInit {
  
  private mytoast:any;

  constructor(private router: Router, 
    private service:UserService,
    private toast: ToastController) { }

    user:users[];

  onSubmit(form:NgForm){
      
    var user = form.value;
    user["user_id"]=localStorage.getItem("user_id");
  
    if(user.name==='' || user.username==='' || user.email==='' ){
      this.show('Please fill out the required fields');
    }else{
   
    this.service.editProfile(user,localStorage.getItem("user_id")).subscribe(response =>{
      this.show('Profile Updated');
      this.router.navigate(['profile']);
      
    });
  } 
   
}
show(message: string) {
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


}
