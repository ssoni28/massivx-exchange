import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {WalletSearchServiceClient} from '../../../services/wallet-search.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-wallet-search',
  templateUrl: './wallet-search.component.html',
  styleUrls: ['./wallet-search.component.css']
})
export class WalletSearchComponent implements OnInit {

  userId: String;
  address: String;
  hash: String;
  noOfTransactions: String;
  totalReceived: String;
  totalSent: String;
  finalBalance: String;
  transactions: String[];
  constructor(private http: Http,
              private walletSearchService: WalletSearchServiceClient,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.userId = params['userId'];
        this.address = params['walletAddress'];
      }
    );

    this.walletSearchService.getAddress(this.address)
      .subscribe((data: any) => {
        this.hash = data.hash160;
        console.log(this.hash);
        this.noOfTransactions = data.n_tx;
        console.log(this.noOfTransactions);
        this.totalReceived = data.total_received;
        this.totalSent = data.total_sent;
        this.finalBalance = data.final_balance;
        this.transactions = data.txs;
        console.log(data);
        console.log(data.hash160);
      });
  }

}
