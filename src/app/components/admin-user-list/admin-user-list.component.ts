import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {User} from '../model/user.model.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

  userId: String;
  users: User[];
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['userId']) {
        this.userId = params['userId'];
      }
    });

    this.userService
      .findAllUsers(this.userId)
      .subscribe((users: User[]) => {
        this.users = users;
      });

  }

}
