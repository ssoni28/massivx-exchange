import {Injectable} from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {SharedService} from './shared.service.client';

// injecting service into module
@Injectable()
export class TicketService {

  newUrl = environment.baseUrl;
  constructor(private http: Http,
              private router: Router) {

  }

  findUserByCredentials(username: String, password: String): Observable<any> {
    const url = this.newUrl + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  createTicket(userId, ticket: any) {
    const url = this.newUrl + '/api/user/' + userId + '/createticket';
    return this.http.post(url, ticket)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  findTicketById(ticketId: String, userId: String) {
    const url = this.newUrl + '/api/user/' + userId + '/createticket/' + ticketId;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  updateTicket(userId: String, ticketId: String, ticket: any) {
    const url = this.newUrl + '/api/user/' + userId + '/createticket/' + ticketId;
    return this.http.put(url, ticketId, ticket)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }


  deleteTicket(userId: String, ticketId: String) {
    const url = this.newUrl + '/api/user/' + userId + '/createticket/' + ticketId;
    return this.http.delete(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }


  findAllTickets(userId: String) {
    const url = this.newUrl + '/api/user/' + userId + '/tickets';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }


}
