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
    CreateUserComponent
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
    AdminServiceClient,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
