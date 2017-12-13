import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {TransactionService} from '../../../services/transaction.service.client';



@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  userId: String;
  transactions: any[];
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private transactionService: TransactionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['userId']) {
        this.userId = params['userId'];
      }
    });

    this.transactionService
      .findTransactionByUserId(this.userId)
      .subscribe((transactions: any) => {
        console.log(transactions);
        this.transactions = transactions;
      });

  }

}
