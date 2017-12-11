import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../services/shared.service.client';
import {NgForm} from '@angular/forms';
import {User} from '../model/user.model.client';
import {UserService} from '../../services/user.service.client';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  userId: String;
  user: User;
  username: String;
  firstName: String;
  lastName: String;
  password: String;
  verifyPassword: String;
  email: String;
  errorFlag: boolean;
  roles: String[];
  isAdmin: boolean;
  role: String;
  errorMsg = 'Password does not match';
  alreadyExistsFlag: boolean;
  alreadyExistsMsg = 'User already exists';
  constructor( private userService: UserService,
               private route: ActivatedRoute,
               private router: Router,
               private sharedService: SharedService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['userId']) {
        this.userId = params['userId'];
      }
    });
  }

  register() {
    this.errorFlag = false;
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifyPassword = this.registerForm.value.verifyPassword;
    this.role = this.registerForm.value.role;
    if (this.password !== this.verifyPassword) {
      this.errorFlag = true;
      return;
    }
    const newUser = {
      username: this.username,
      password: this.password,
      roles: this.role
    };
    this.userService
      .createNewUser(this.userId, newUser)
      .subscribe((user) => {
        this.router.navigate(['/user', this.userId , 'admin', 'user']);
      });
  }

  cancel() {
    this.router.navigate(['/user', this.userId]);
  }
}
