import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password';

  roles: String[];
  isSupport: boolean;

  constructor(private router: Router,
              private userService: UserService,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.errorFlag = false;
  }

  login() {
    // fetching data from loginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    // calling client side userservice to send login information
    console.log('data', this.username);
    this.userService.login(this.username, this.password)
      .subscribe(
        (data: any) => {
          this.sharedService.user = data;
          this.roles = data.roles;
          this.isSupport = this.getRole();
          if(this.isSupport) {
            this.router.navigate(['/user', data._id, 'support']);
          } else {
            this.router.navigate(['/user', data._id]);
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  getRole() {
    for(let role of this.roles) {
      if(role === 'SUPPORTUSER') {
        return true;
      }
      return false;
    }
  }
}
