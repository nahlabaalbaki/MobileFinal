import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list2',
  templateUrl: './to-do-list2.page.html',
  styleUrls: ['./to-do-list2.page.scss'],
})
export class ToDoList2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
}
