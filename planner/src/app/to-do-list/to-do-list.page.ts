import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
})
export class ToDoListPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  profile(){
    this.router.navigate(['profile']);
  }
  todo(){
    this.router.navigate(['to-do-list']);
  }
}
