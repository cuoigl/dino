import { Component, OnInit } from '@angular/core';
import { AuthService } from '@dino/users';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  constructor(private auth: AuthService) {}
  ngOnInit() {}

  logoutUser() {
    this.auth.logout();
  }
}
