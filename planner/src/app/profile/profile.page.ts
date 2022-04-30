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
    this.router.navigate(['profile']); //By clicking on this button, the user will be rendered to the profile page.
  }
  todo(){
    this.router.navigate(['to-do-list']); //By clicking on this button, the user will be rendered to the add new tasks page.
  }
  todo2(){
    this.router.navigate(['to-do-list2']); //By clicking on this button, the user will be rendered to the viewing tasks page.
  }
  password(){
    this.router.navigate(['password']); //By clicking on this button, the user will be rendered to the change password page.
  }
  
  logout(){
    this.router.navigate(['landing']); //By clicking on this button, the user will be rendered to the landing page.
  }
  editprofile(){
    this.router.navigate(['profile2']); //By clicking on this button, the user will be rendered to the edit profile page.
  }

  PROFILE(){ //This function shows the output of getUserProfile().
    this.service.getUserProfile(localStorage.getItem("user_id")).subscribe(response =>{
      this.user=response;
    })
  }
}
