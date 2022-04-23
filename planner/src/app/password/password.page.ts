import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { users, UserService } from '../apis/user.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  private mytoast:any;

  constructor(private router:Router, 
    private service:UserService, 
    private toast: ToastController) { }

//   onSubmit(form:NgForm){
      
//     const user = form.value;
//     this.service.changePassword(user).subscribe(response =>{
//       this.show('Password Changed');
//     });
  
   
// }
// show(message: string) {
//   this.mytoast = this.toast.create({
//     message: message,
//     duration: 2000
//   }).then((toastdata) => {
//     console.log(toastdata);
//     toastdata.present();
//   });
// }



  ngOnInit() {
  }
  profile(){
    this.router.navigate(['profile']);
  }

}
