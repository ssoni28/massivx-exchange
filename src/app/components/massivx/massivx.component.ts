import { Component, OnInit } from '@angular/core';

import {UserService} from '../../services/user.service.client';
import {SharedService} from '../../services/shared.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {BittrexService} from '../../services/bittrex.service.client';
import {User} from '../../models/user.model.client';
import {WalletSearchServiceClient} from '../../services/wallet-search.service.client';

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

  stats: any;
  constructor(private userService: UserService,
              private walletService: WalletSearchServiceClient,
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

    this.getStats();
  }

  getStats() {
    this.walletService.getStats()
      .subscribe((data: any) => {
        this.stats = data;
        console.log(data);
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
