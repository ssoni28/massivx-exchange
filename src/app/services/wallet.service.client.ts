import {Injectable} from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class WalletService {
  newUrl = environment.baseUrl;
  constructor(private http: Http,
              private router: Router) {
  }

  createWallet(userId: String, data: any) {
    const obj = {
      searchText: data
    };
    const url = this.newUrl + '/api/user/' + userId +'/createwallet';
    return this.http.post(url, obj)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  findWalletsByUser(userId: String) {
    const url = this.newUrl + '/api/user/' + userId + '/wallet';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
