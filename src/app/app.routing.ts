
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
import {CreateUserComponent} from './components/create-user/create-user.component';
import {AdminUserUpdateComponent} from './components/admin/admin-user-update/admin-user-update.component';
import {WalletSearchComponent} from './components/wallet-list/wallet-search/wallet-search.component';
import {SupportUserComponent} from './components/support/support-user/support-user.component';
import {TicketEditComponent} from './components/support/ticket-edit/ticket-edit.component';
import {TicketNewComponent} from './components/support/ticket-new/ticket-new.component';
import {TicketListComponent} from './components/support/ticket-list/ticket-list.component';
import {ForumComponent} from './components/forum/forum.component';
import {TransactionListComponent} from './components/transaction/transaction-list/transaction-list.component';

const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'home', component : HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'user/:userId', component: MassivxComponent, canActivate: [AuthenticationService]},
  {path: 'user/:userId/profile', component: ProfileComponent, canActivate: [AuthenticationService]},
  {path: 'user/:userId/support', component: SupportUserComponent, canActivate: [AuthenticationService]},
  {path: 'todo', component : TodoComponent},
  {path: 'todoList', component : TodoListComponent},
  {path: 'test', component: TestComponent},
  {path: 'website', component: WebsiteListComponent},
  {path: 'user/:userId/apitest', component: ApiTestComponent},
  {path: 'user/:userId/createwallet', component: WalletComponent, canActivate: [AuthenticationService]},
  {path: 'user/:userId/wallet', component: WalletListComponent, canActivate: [AuthenticationService]},
  {path: 'user/:userId/admin/user', component: AdminUserListComponent, canActivate: [AdminServiceClient] },
  {path: 'user/:userId/admin/newuser', component: CreateUserComponent, canActivate: [AdminServiceClient] },
  {path: 'user/:userId/admin/updateuser/:exuserId/profile', component: AdminUserUpdateComponent, canActivate: [AdminServiceClient]},
  {path: 'user/:userId/wallet/search/:walletAddress', component: WalletSearchComponent, canActivate: [AuthenticationService]},
  {path: 'user/:userId/tickets', component: TicketListComponent, canActivate: [AuthenticationService]},
  {path: 'user/:userId/createticket', component: TicketNewComponent, canActivate: [AuthenticationService]},
  {path: 'user/:userId/createticket/:ticketId', component: TicketEditComponent, canActivate: [AuthenticationService]},
  {path: 'user/:userId/forum', component: ForumComponent, canActivate: [AuthenticationService]},
  {path: 'user/:userId/transactions', component: TransactionListComponent, canActivate: [AuthenticationService]}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
