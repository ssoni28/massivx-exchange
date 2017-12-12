import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TicketService} from "../../../services/ticket.service.client";

@Component({
  selector: 'app-ticket-new',
  templateUrl: './ticket-new.component.html',
  styleUrls: ['./ticket-new.component.css']
})
export class TicketNewComponent implements OnInit {
  @ViewChild('f') ticketForm: NgForm;
  userId: String;
  name: String;
  description: String;
  type: String
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
    });
  }

  createTicket() {
    const newTicket = {
      userId: this.userId,
      name: this.ticketForm.value.name,
      description: this.ticketForm.value.description,
      type: this.ticketForm.value.type
    };
    /* this.page = new Page('', this.name, this.websiteId, this.title);*/
    if (newTicket.name !== '') {
      this.ticketService.createTicket(this.userId, newTicket)
        .subscribe(
          (data: any) => {
            this.router.navigate(['/user', this.userId, 'tickets']);
          }
        );
    } else {
      this.errorFlag = true;
      this.errorMsg = 'Please provide ticket name';
    }
  }


}
