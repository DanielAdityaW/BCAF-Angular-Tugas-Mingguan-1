import { Component, EventEmitter, Output } from '@angular/core';
import { CustomerService } from '../../../../cores/services/customer.services';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrl: './customer-search.component.css'
})
export class CustomerSearchComponent {
  query: string = '';
  icons = {
    search: faSearch,
  };

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor(private customerService: CustomerService) {}

  onSearch() {
    this.search.emit(this.query);
  }

}
