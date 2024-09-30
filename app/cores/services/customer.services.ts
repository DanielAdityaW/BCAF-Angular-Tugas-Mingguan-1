import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../interfaces/i-customer';
import { environment } from '../../../environments/environment.development';
import { IPagination } from '../interfaces/i-pagination';
import { Pagination } from '../models/pagination';

@Injectable({
  providedIn: 'root',
})


export class CustomerService {
    private _customers: ICustomer[] = [];   
    //private _customer: ICustomer = new Customer();
    private _customerPage: IPagination<ICustomer[]> = new Pagination<ICustomer[]>();

    constructor(private http: HttpClient) {}

    public allCustomerPage(page: number = 1,query: string = ''): Observable<IPagination<ICustomer[]>> {
      return this.http.get<IPagination<ICustomer[]>>(`${environment.BASE_URL}/customer?name=${query}&_page=${page}&_per_page=5`);
    }
      
    // public search(field: string, query:string): Observable<ICustomer[]>{
    //     return this.http.get<ICustomer[]>(`${environment.BASE_URL}/customer?_limit=5&${field}=${query}`);
    // }

    get customers(): ICustomer[]{
        return this._customers;
    }

    set customers(data: ICustomer[]){
        this._customers = data;
    }

    get customerPage(): IPagination<ICustomer[]> {
        return this._customerPage;
    }
    
    set customerPage(data: IPagination<ICustomer[]>) {
        this._customerPage = data;
        this._customers = data.data;
    }
}
