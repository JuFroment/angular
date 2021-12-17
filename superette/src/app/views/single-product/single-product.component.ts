import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id= this.route.snapshot.params['id'];

    this.productService
      .getProductById(+id) // + before a string cast it into a number (parseInt)
      .then((product: Product) => {
        this.product = product;
      });
  }

}
