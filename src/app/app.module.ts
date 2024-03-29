import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEditComponent } from './todo-list/todo-edit.component';
import {TodoService} from './services/todo.service.client';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import {WebsiteService} from './services/website.service.client';
import {BittrexService} from './services/bittrex.service.client';
import { ApiTestComponent } from './components/api-test/api-test.component';
import { WalletComponent } from './components/wallet/wallet.component';
import {WalletService} from './services/wallet.service.client';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import {UserService} from './services/user.service.client';
import {SharedService} from './services/shared.service.client';
import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';
import {AdminServiceClient} from './services/admin.service.client';
import {AuthenticationService} from './services/authentication.service.client';
import { MassivxComponent } from './components/massivx/massivx.component';
import { WalletListComponent } from './components/wallet-list/wallet-list.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { AdminUserUpdateComponent } from './components/admin/admin-user-update/admin-user-update.component';
import { WalletSearchComponent } from './components/wallet-list/wallet-search/wallet-search.component';
import {WalletSearchServiceClient} from './services/wallet-search.service.client';
import { SupportUserComponent } from './components/support/support-user/support-user.component';
import { TicketNewComponent } from './components/support/ticket-new/ticket-new.component';
import { TicketEditComponent } from './components/support/ticket-edit/ticket-edit.component';
import { TicketListComponent } from './components/support/ticket-list/ticket-list.component';
import {TicketService} from './services/ticket.service.client';
import { ForumComponent } from './components/forum/forum.component';
import { TransactionListComponent } from './components/transaction/transaction-list/transaction-list.component';
import {TransactionService} from './services/transaction.service.client';


@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    TodoComponent,
    TodoListComponent,
    TodoEditComponent,
    WebsiteListComponent,
    ApiTestComponent,
    WalletComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    AdminUserListComponent,
    MassivxComponent,
    WalletListComponent,
    CreateUserComponent,
    AdminUserUpdateComponent,
    WalletSearchComponent,
    SupportUserComponent,
    TicketNewComponent,
    TicketEditComponent,
    TicketListComponent,
    ForumComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [ TestService,
    TodoService,
    SharedService,
    UserService,
    WebsiteService,
    BittrexService,
    WalletService,
    TicketService,
    TransactionService,
    WalletSearchServiceClient,
    AdminServiceClient,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
