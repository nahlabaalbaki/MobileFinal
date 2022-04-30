import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  login(){
    this.router.navigate(['login']); //By clicking on this button, the user will be rendered to the login page.
  }
  register(){
    this.router.navigate(['signup']);//By clicking on this button, the user will be rendered to the signup page.
  }

}
