import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class WalletSearchServiceClient {

  result: any;
  constructor(private http: Http) {

  }

  getAddress(address: String) {
    const url = "https://cors-anywhere.herokuapp.com/" + "https://blockchain.info/rawaddr/" + address + "?format=json&cors=true";
    console.log(url);
    return this.http.get(url)
      .map(result =>
        this.result = result.json());
  }

  getStats() {
    const url ="https://cors-anywhere.herokuapp.com/" + "https://api.blockchain.info/stats";
    console.log(url);
    return this.http.get(url)
      .map(result =>
        this.result = result.json());
  }
}
