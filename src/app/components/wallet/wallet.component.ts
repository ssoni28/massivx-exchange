import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WalletService} from '../../services/wallet.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  searchText: String;
  address: any;
  userId: String;
  privatekey: any;
  errorFlag: boolean;
  constructor( private walletService: WalletService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['userId']) {
        this.userId = params['userId'];
      }
    });
  }

  createWallet() {
    // this.searchText = this.walletForm.value.searchText;
    if (this.searchText === '') {
      this.errorFlag = true;
      return;
    } else {
      this.walletService
        .createWallet(this.userId, this.searchText)
        .subscribe((data) => {
          this.address = data.address;
          this.privatekey = data.privateKey;
          console.log(data);
          this.router.navigate(['/user', this.userId, 'wallet']);
        });
    }
  }
}
