import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { users, UserService } from '../apis/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {


  constructor(
    private router: Router,
    private service:UserService) { }

    onSubmit(form:NgForm){
      
      const user = form.value;
       
      this.service.addNewUser(user).subscribe(response =>{
        this.router.navigate(['login']);
      });
     
  }

  ngOnInit() {
 
  }
  // register(){
  //   this.router.navigate(['login']);
  // }

}
