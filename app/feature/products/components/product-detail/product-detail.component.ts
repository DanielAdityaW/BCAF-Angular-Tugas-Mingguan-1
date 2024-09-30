import { Component } from '@angular/core';
import { IVariant } from '../../interfaces/i-variant';
import { Variant } from '../../models/variant';
import { IProduct } from '../../interfaces/i-product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  index! : number;
  active: number = 1;
  variantProduct :IVariant =  new Variant();
  product : IProduct = {
    title:  'Playstation 5',
    price:  130000000,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    variants: [{
      key: 'ukuran',
      value: 1,
      picture: 'https://media.dinomarket.com/docs/imgTD/2024-02/DM_CA961EB8D9C88E81647BBFE7417EB9C0_210224140212_ll.jpg'
    }],
    stock: 0
  };
  
  getPajak(persentase: number, hargaAfterDiskon: number): number {
    return hargaAfterDiskon + this.product.price * persentase;
  }

  addVariant() {
    let payload = {
      key: this.variantProduct.key,
      value: this.variantProduct.value,
      picture: this.variantProduct.picture,
    };
    this.product.variants.push(payload);
    this.variantProduct.key = '';
    this.variantProduct.value= '';
    this.variantProduct.picture = '';
  }

  getVariant(data:IVariant) {
    let index : number = this.product.variants.findIndex((value: IVariant) => {
      return data.key == value.key;
    });
    this.index = index;
    //versi non-control
    //this.variantProduct = data;
    //versi control
    this.variantProduct.key = data.key;
    this.variantProduct.value = data.value
    this.variantProduct.picture = data.picture;
    // console.log(index);
  }

  updateVariant(){
    console.log(this.index);
    if (this.index > -1){
      this.product.variants[this.index] = this.variantProduct;
    }
  }

  deleteVariant(i:number){
    this.product.variants.splice(i, 1);
  }
}
