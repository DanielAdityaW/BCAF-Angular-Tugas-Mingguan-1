import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../../../../cores/interfaces/i-customer';
import { CustomerService } from '../../../../cores/services/customer.services';
import { IPagination } from '../../../../cores/interfaces/i-pagination';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = [];
  page: number = 1;
  totalItems: number = 0;
  query: string = '';
  totalPages: number = 0;
  pages: number[] = [];
  pageSize: number = 5;

  icons = {
    prev : faAnglesLeft,
    next : faAnglesRight
  }

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers(this.page, this.query);
  }

  calculatePages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  loadCustomers(page: number, query: string): void {
    this.customerService.allCustomerPage(page, query).subscribe((resp: IPagination<ICustomer[]>) => {
      this.customers = resp.data;
      this.totalItems = resp.items;
      this.calculatePages(); 
    });
  }

  onPaginateCustomer(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.page = page;
      this.loadCustomers(this.page, this.query);
    }
  }

  onSearch(newQuery: string): void {
    this.query = newQuery;
    this.page = 1; 
    this.loadCustomers(this.page, this.query);
  }
}
