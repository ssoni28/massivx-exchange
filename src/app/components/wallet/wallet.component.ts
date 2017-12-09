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
  privatekey: any;
  errorFlag: boolean;
  constructor( private walletService: WalletService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
  }

  createWallet() {
    // this.searchText = this.walletForm.value.searchText;
    if (this.searchText === '') {
      this.errorFlag = true;
      return;
    } else {
      this.walletService
        .createWallet(this.searchText)
        .subscribe((data) => {
          this.address = data.wallet;
          this.privatekey = data.privatekey;
          console.log(data);
         // this.router.navigate(['/createwallet']);
        });
    }
  }
}
