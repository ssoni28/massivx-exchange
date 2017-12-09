
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {TodoComponent} from './todo/todo.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {ApiTestComponent} from './components/api-test/api-test.component';
import {WalletComponent} from './components/wallet/wallet.component';

const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'todo', component : TodoComponent},
  {path: 'todoList', component : TodoListComponent},
  {path: 'test', component: TestComponent},
  {path: 'website', component: WebsiteListComponent},
  {path: 'apitest', component: ApiTestComponent},
  {path: 'createwallet', component: WalletComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
