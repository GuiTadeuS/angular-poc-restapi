import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

import { Product } from '../../interfaces/product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: any = [];

  product: any = {}

  ngOnInit() {
    this.getProducts();
  }

  getSingleProduct() {

  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(
        res => this.products = res,
        err => console.log(err)
      )
    console.log('getProducts', this.products)
  }

  deleteProduct(id: number): void {

    this.productService.deleteProduct(id)
      .subscribe(
        res => {
          console.log(res);
          this.getProducts();
        },
        err => console.log(err)
      )
    console.log('deleteProduct', id)
  }

}
