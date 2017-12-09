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
    ApiTestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [ TestService, TodoService, WebsiteService, BittrexService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
