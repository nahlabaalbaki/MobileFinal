import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users, UserService } from '../apis/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:users[];
  constructor(private router: Router, private service:UserService) { }

  ngOnInit() {
    this.service.getUsertoLogin().subscribe (response =>{
      this.user = response;
    });
  }
  login(){
    this.router.navigate(['to-do-list']);
  }
}
