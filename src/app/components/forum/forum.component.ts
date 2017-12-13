import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user.model.client';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  userId: String;
  currentUser: User;
  exchangeUsers: User[];
  isExUser: boolean;
  follows: String[];
  followedBy: String[];
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
      .findAllExUsers(this.userId)
      .subscribe((users: User[]) => {
        this.exchangeUsers = users;
      });

    this.getUser();
  }


  getUser() {
    this.userService.findUserById(this.userId)
      .subscribe(
        (currentUser: User) => {
          this.currentUser = currentUser;
          this.followedBy = currentUser.followedBy;
          this.follows = currentUser.follows;
        }
      );
  }

  follow(user: User) {
    user.followedBy.push(this.userId);
    this.currentUser.follows.push(user._id);
    this.userService.updateUser(this.userId, this.currentUser)
      .subscribe(
        (data: User) => {
        }
      );

    this.userService.updateUser(user._id, user)
      .subscribe(
        (data: User) => {
        }
      );
  }

}
