import { Component, OnInit } from '@angular/core';
import { UsersService } from '@dino/users';

@Component({
  selector: 'dinoshop-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'dinoshop';
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.initAppSession();
  }
}
