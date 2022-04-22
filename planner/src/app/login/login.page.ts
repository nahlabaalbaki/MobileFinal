import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { users, UserService } from '../apis/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private mytoast: any;
  constructor(private router: Router, 
    private service:UserService ,
    private toast: ToastController) { }

  ngOnInit() {
  
  }
  onSubmit(form:NgForm){
      
    const user = form.value;
    if(user.username==='' || user.password==='' ){
      this.show('Please fill out the required fields');
    }else{
    this.service.getUsertoLogin(user.username, user.password).subscribe(response =>{
      if(response[0]){
        this.show('You are now logged in.');
        this.router.navigate(['to-do-list']);
      }
      else{
        this.show('Account cannot be found.');
      }
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

}
