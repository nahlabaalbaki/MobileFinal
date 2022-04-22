import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { users, UserService } from '../apis/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  private mytoast:any;

  constructor(
    private router: Router,
    private service:UserService,
    private toast: ToastController) { }

    onSubmit(form:NgForm){
      
      const user = form.value;
      if(user.name==='' || user.username==='' || user.password==='' || user.email===''){
        this.show('Please fill out the required fields');
      }else{
       
      this.service.addNewUser(user).subscribe(response =>{
        this.router.navigate(['login']);
        this.show('Account Registered');
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


}
