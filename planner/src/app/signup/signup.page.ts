import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users, UserService } from '../apis/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user:users[];

  constructor(
    private router: Router,
    private service:UserService) { }

  ngOnInit() {
    // this.service.addNewUser(this.user).subscribe (response =>{
    //   this.users = response;
    // });
  }
  register(){
    this.router.navigate(['login']);
  }

}
