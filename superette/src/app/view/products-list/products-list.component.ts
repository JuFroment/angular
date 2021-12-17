import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products!: Product[];

  constructor(private productService : ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.products;
  }

  onClickUpdateStatus(arrayIndex: number) {
    this.productService
    .updateStatusForProductId(this.products[arrayIndex].id)
    .then((product : Product) => {this.products[arrayIndex] = product;
    });
  }

  onClickUpdateAllStatus(newStatus: boolean) {
    this.productService
    .updateAllStatus(newStatus)
    .then((products: Product[]) => {
      this.products = products;
    });
  }

  onClickDeleteProduct(arrayIndex: number) : void {
    this.productService.deleteProduct(this.products[arrayIndex].id).then(() => {

    });
  }
}
