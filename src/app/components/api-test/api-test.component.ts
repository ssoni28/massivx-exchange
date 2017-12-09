import { Component, OnInit } from '@angular/core';
import {BittrexService} from '../../services/bittrex.service.client';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {
  searchText: String;
  objectKeys = Object.keys;
  cryptos: any;
  constructor(private data: BittrexService){

  }

  ngOnInit() {
  }

  searchCrypto() {
    this.data.getPrices(this.searchText)
      .subscribe(res => {
        this.cryptos = res;
        console.log(res);
      });
  }
}
