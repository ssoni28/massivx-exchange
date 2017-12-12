import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class BittrexService {
  result: any;

  coins: any;
  urlBase = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=TEXT&tsyms=INR,USD';
  constructor(private http: Http) {

  }

  getPrices(searchText: any) {
    const url = this.urlBase
      .replace('TEXT', searchText);
    return this.http.get(url)
      .map(result =>
        this.result = result.json());
  }

  getCoins() {
    const url = 'https://www.cryptocompare.com/api/data/coinlist/';
    return this.http.get(url)
      .map(coins =>
      this.result = coins.json());
  }
}
