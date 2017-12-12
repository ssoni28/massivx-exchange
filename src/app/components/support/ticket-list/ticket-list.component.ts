import { Component, OnInit } from '@angular/core';
import {TicketService} from '../../../services/ticket.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Ticket} from '../../../models/ticket.model.client';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  userId: String;
  ticketId: String;
  tickets: Ticket[];
  constructor(private ticketService: TicketService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['userId']) {
        this.userId = params['userId'];
      }
    });

    this.ticketService
      .findAllTickets(this.userId)
      .subscribe((tickets: Ticket[]) => {
        this.tickets = tickets;
      });

  }

}
