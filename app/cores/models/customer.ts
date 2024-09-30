import { IAddressChild } from "../interfaces/i-address";
import { ICustomer } from "../interfaces/i-customer";

export class Customer implements ICustomer{
    id: number = 0;
    name: string = "";
    email: string = "";
    address!: IAddressChild;
    status: string = "";
}