import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList: any = [];
  showUsers: boolean = false;
  ngOnInit(): void {
    this.loadUsers();
  }
  constructor(private userService: UserService) { }

  loadUsers = () => {
    return this.userService.GetUsers().subscribe((users: {}) => {
      this.usersList = users;
    })
  }

  toggle = () => { 
    this.showUsers = !this.showUsers;
  }
}
