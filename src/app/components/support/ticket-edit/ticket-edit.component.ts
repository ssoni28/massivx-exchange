import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {TicketService} from '../../../services/ticket.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Ticket} from '../../../models/ticket.model.client';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent implements OnInit {

  @ViewChild('f') ticketEditForm: NgForm;
  userId: String;
  ticketId: String;

  name: String;
  description: String;
  type: String;

  tickets: Ticket[];
  errorFlag: boolean;
  errorMsg: String;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private ticketService: TicketService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['userId']) {
        this.userId = params['userId'];
      }
      if (params['ticketId']) {
        this.ticketId = params['ticketId'];
      }
    });

    this.getTicket();
  }

  getTicket() {
    this.ticketService.findTicketById(this.ticketId, this.userId)
      .subscribe(
        (currentTicket: Ticket) => {
          this.name = currentTicket.name;
          this.type = currentTicket.type;
          this.description = currentTicket.description;
        }
      );
  }


  updateTicket() {
    const ticket = new Ticket(this.userId, this.name, this.type, this.description);
    if (ticket.name !== '') {
      this.ticketService.updateTicket(this.userId, this.ticketId, ticket)
        .subscribe(
          (data: any) => {
            this.router.navigate(['/user', this.userId, 'createticket', this.ticketId]);
          }
        );
    } else {
      this.errorFlag = true;
      this.errorMsg = 'Please provide ticket name';
    }
  }

  deleteTicket() {
    this.ticketService.deleteTicket(this.userId, this.ticketId)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/user', this.userId, 'tickets']);
        }
      );
  }

}
