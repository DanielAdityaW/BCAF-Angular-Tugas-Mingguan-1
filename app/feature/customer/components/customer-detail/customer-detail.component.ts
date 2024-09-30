import { Component, Input } from '@angular/core';
import { ICustomer } from '../../../../cores/interfaces/i-customer';
import { ReservasiService } from '../../../../cores/services/reservasi.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css',
})
export class CustomerDetailComponent {
  @Input()
  customer!: ICustomer;

  icons = {
    select : faCheck,
  }

  constructor(private reservasiService: ReservasiService) {}

  customerReservasi() {
    this.reservasiService.customer = this.customer;
  }
}
