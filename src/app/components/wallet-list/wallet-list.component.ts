import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WalletService} from "../../services/wallet.service.client";

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.css']
})
export class WalletListComponent implements OnInit {

  userId: String;
  walletId: String;
  wallets: any[];
  constructor(private walletService: WalletService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['userId']) {
        this.userId = params['userId'];
      }
    });
    this.findWalletsByUserId();
  }

  findWalletsByUserId() {
    this.walletService.findWalletsByUser(this.userId)
      .subscribe(
        (data: any) => {
          this.wallets = data;
        }
      );
  }
}
