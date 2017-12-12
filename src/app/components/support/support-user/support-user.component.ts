import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-support-user',
  templateUrl: './support-user.component.html',
  styleUrls: ['./support-user.component.css']
})
export class SupportUserComponent implements OnInit {

  userId: String;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['userId']) {
        this.userId = params['userId'];
      }
    });
  }

}
