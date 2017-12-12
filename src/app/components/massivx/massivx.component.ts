import { Component, OnInit } from '@angular/core';

import {UserService} from '../../services/user.service.client';
import {SharedService} from '../../services/shared.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {BittrexService} from '../../services/bittrex.service.client';
import {User} from '../../models/user.model.client';

@Component({
  selector: 'app-massivx',
  templateUrl: './massivx.component.html',
  styleUrls: ['./massivx.component.css']
})
export class MassivxComponent implements OnInit {

  userId: String;
  username: String;
  firstName: String;
  lastName: String;
  password: String;
  user: User;
  email: String;
  roles: String[];
  isAdmin: boolean;
  coins: any;

  constructor(private userService: UserService,
              private sharedService: SharedService,
              private data: BittrexService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['userId']) {
        this.userId = params['userId'];
      }
    });

    this.getUser();

    this.getCoins();
  }

  getCoins() {
    this.data.getCoins()
      .subscribe(res => {
        this.coins = res;
        console.log(res);
      });
  }

  getUser() {
    this.userService.findUserById(this.userId)
      .subscribe(
        (currentUser: User) => {
          this.user = currentUser;
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
    for(let role of this.roles) {
      if(role === 'ADMIN') {
        return true;
      }
      return false;
    }
  }
}
