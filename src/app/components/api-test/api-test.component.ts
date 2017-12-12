import { Component, OnInit } from '@angular/core';
import {BittrexService} from '../../services/bittrex.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {
  searchText: String;
  objectKeys = Object.keys;
  cryptos: any;
  userId: String;
  constructor(private data: BittrexService,
              private route: ActivatedRoute,
              private router: Router){
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['userId']) {
        this.userId = params['userId'];
      }
    });
  }

  searchCrypto() {
    this.data.getPrices(this.searchText)
      .subscribe(res => {
        this.cryptos = res;
        console.log(res);
      });
  }
}
