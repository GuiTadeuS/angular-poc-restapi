import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../interfaces/product'
import { ModalService } from '../_modal';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService, private modalService: ModalService) { }

  selectedProduct: any = null;

  products: any = [];

  product: any = {};

  ngOnInit() {
    this.getProducts();
  }

  getSingleProduct() {

  }

  openModal(text_id: string, product_id: any) {
    this.modalService.open(text_id)
  }

  closeModal(text_id: string) {
    this.modalService.close(text_id)
  }
  getProducts(): void {
    this.productService.getProducts()
      .subscribe(
        res => this.products = res,
        err => console.log(err)
      )
    console.log('getProducts', this.products)
  }

  deleteProduct(modal_id: string, id: number): void {

    this.productService.deleteProduct(id)
      .subscribe(
        res => {
          console.log(res);
          this.getProducts();
        },
        err => console.log(err)
      )
    console.log('deleteProduct', id)
    this.closeModal(modal_id)
  }
}
