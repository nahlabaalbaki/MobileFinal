import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users, UserService } from '../apis/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private service:UserService) { }
  
  user:any=[];

  ngOnInit() {
    this.PROFILE();
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
  password(){
    this.router.navigate(['password']);
  }
  
  logout(){
    this.router.navigate(['landing']);
  }
  editprofile(){
    this.router.navigate(['profile2']);
  }

  PROFILE(){
    this.service.getUserProfile(localStorage.getItem("user_id")).subscribe(response =>{
      this.user=response;
    })
  }
}
