import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: any = {};
  edit: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.productService.getProduct(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.product = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  submitProduct() {
    this.productService.createProduct(this.product)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        err => console.log(err)

      )
    console.log('submitProduct', this.product.id)
    this.router.navigate(['/']);
  }

  updateProduct() {
    if (typeof this.product.id === 'number') {
      console.log('updateProduct', this.product.id)
      delete this.product.createdAt;
      this.productService.updateProduct(this.product.id, this.product)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/product']);
          },
          err => console.log(err)
        );
    } else {
      console.error("Invalid product ID");
    }
  }

}