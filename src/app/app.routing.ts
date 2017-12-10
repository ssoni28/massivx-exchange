
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {TodoComponent} from './todo/todo.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {ApiTestComponent} from './components/api-test/api-test.component';
import {WalletComponent} from './components/wallet/wallet.component';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {AdminUserListComponent} from './components/admin-user-list/admin-user-list.component';
import {AdminServiceClient} from './services/admin.service.client';
import {AuthenticationService} from './services/authentication.service.client';
import {MassivxComponent} from './components/massivx/massivx.component';
import {WalletListComponent} from './components/wallet-list/wallet-list.component';

const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'home', component : HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'user/:userId', component: MassivxComponent, canActivate: [AuthenticationService]},
  {path: 'user/:userId/profile', component: ProfileComponent, canActivate: [AuthenticationService]},
  {path: 'todo', component : TodoComponent},
  {path: 'todoList', component : TodoListComponent},
  {path: 'test', component: TestComponent},
  {path: 'website', component: WebsiteListComponent},
  {path: 'apitest', component: ApiTestComponent},
  {path: 'user/:userId/createwallet', component: WalletComponent},
  {path: 'user/:userId/wallet', component: WalletListComponent},
  {path: 'admin/user', component: AdminUserListComponent, canActivate: [AdminServiceClient] },

];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
