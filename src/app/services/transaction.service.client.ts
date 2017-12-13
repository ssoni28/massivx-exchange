import {Injectable} from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {SharedService} from './shared.service.client';

// injecting service into module
@Injectable()
export class TransactionService {

  newUrl = environment.baseUrl;
  constructor(private http: Http,
              private router: Router) {

  }

  createTransaction(transaction, userId) {
    const url = this.newUrl + '/api/user/' + userId + '/transaction';
    return this.http.post(url, transaction)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  findTransactionByUserId(userId: String) {
    const url = this.newUrl + '/api/user/' + userId + '/transactions';
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  updateTransaction(userId: String, transaction: any, transactionId: String) {
    const url = this.newUrl + '/api/user/' + userId + '/transaction' + transactionId;
    return this.http.put(url, transaction)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  deleteTransaction(userId: String, transaction: any, transactionId: String) {
    const url = this.newUrl + '/api/user/' + userId + '/transaction' + transactionId;
    return this.http.delete(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  /*
  findAllTransactions(userId: String) {
    const url = this.newUrl + '/api/user/' + userId + '/transactions';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }*/
}
