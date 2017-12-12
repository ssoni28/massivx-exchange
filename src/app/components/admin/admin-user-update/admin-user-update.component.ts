import { Component, OnInit } from '@angular/core';

import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-admin-user-update',
  templateUrl: './admin-user-update.component.html',
  styleUrls: ['./admin-user-update.component.css']
})
export class AdminUserUpdateComponent implements OnInit {
  userId: String;
  username: String;
  firstName: String;
  lastName: String;
  password: String;
  user: User;
  email: String;
  roles: String[];
  isAdmin: boolean;
  exuserId: String;
  exuser: User;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password!';

  constructor(private userService: UserService,
              private sharedService: SharedService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['userId']) {
        this.userId = params['userId'];
      }
      if (params['exuserId']) {
        this.exuserId = params['exuserId'];
      }
    });

    this.getUser();
    this.getExUser();
  }

  getUser() {
    this.userService.findUserById(this.userId)
      .subscribe(
        (currentUser: User) => {
          this.user = currentUser;
        }
      );
  }
  getExUser() {
    this.userService.findUserById(this.exuserId)
      .subscribe(
        (currentUser: User) => {
          this.exuser = currentUser;
          this.username = currentUser.username;
          this.firstName = currentUser.firstName;
          this.lastName = currentUser.lastName;
          this.email = currentUser.email;
          this.roles = currentUser.roles;
          this.isAdmin = this.getRole();
        }
      );
  }

  getRole() {
    for (let role of this.roles) {
      if (role === 'ADMIN') {
        return true;
      }
      return false;
    }
  }

  updateUser() {
    this.exuser.username = this.username;
    this.exuser.firstName = this.firstName;
    this.exuser.lastName = this.lastName;
    this.exuser.email = this.email;
    this.userService.updateExUser(this.exuserId, this.userId, this.exuser)
      .subscribe(
        (data: User) => {
          this.router.navigate(['/user', this.userId, 'admin', 'user']);
        }
      );
  }

  deleteUser() {
    this.userService.deleteExUser(this.exuserId, this.userId)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/user', this.userId, 'admin', 'user']);
        }
      );
  }
}
