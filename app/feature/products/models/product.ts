import { ISimpleProduct } from "../interfaces/i-product";

export class Product implements ISimpleProduct {
    title: string = "";
    description: string= "";
    price: number = 0;
    stock: number = 0;
}