import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];


	constructor() {
    this.products = [];

    for (let i = 1; i < 11; i++) {
      this.products.push(new Product(i,'Nom ' + i, true));
    }
   }

   addProduct(productToAdd: Product): Promise<void> {
     return new Promise<void>((res, rej) => {
       productToAdd.id = this.products[this.products.length -1].id + 1;
       this.products.push(productToAdd);
       res();
     })
   }
   editProduct(editedProduct: Product): Promise<void> {
     return new Promise<void>((res, rej) => {
      for (let [index, product] of this.products.entries()) {
        if (product.id === editedProduct.id) {
          this.products[index] = editedProduct;
          res();
          break;
        }
      }
    });
  }

    deleteProduct(productIdToDelete: number): Promise<void> {
      return new Promise<void>((res, rej) => {
        for (let [index, product] of this.products.entries()) {
          if (product.id === productIdToDelete) {
            this.products.splice(index, 1);
            res();
            break;
          }
        }
      });
    }

   getProductById(productId: number): Promise<Product> {
     return new Promise<Product>((res, rej) => {
       for (let product of this.products) {
         if (product.id === productId) {
           res(product)
           break;
         }
       }
     })
   }

   updateStatusForProductId(productId: number): Promise<Product> {
    return new Promise<Product>(
      (res, rej) => {
      for (let[index, product] of this.products.entries()) {
        if (product.id === productId) {
          this.products[index].status = !this.products[index].status;
          res(this.products[index])
          break;
        }
      }
    });
  }

   updateAllStatus(newStatus: boolean): Promise<Product[]> {
     return new Promise<Product[]>((res, rej) => {
       this.products.forEach(product => (product.status = newStatus));
       res(this.products);
     });
   }
	}
function deleteProduct(productIdToDelete: any, number: any) {
  throw new Error('Function not implemented.');
}

function productIdToDelete(productIdToDelete: any, number: any) {
  throw new Error('Function not implemented.');
}

