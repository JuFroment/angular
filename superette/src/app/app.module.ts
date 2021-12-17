import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './view/products-list/products-list.component';
import { ProductService } from './services/product/product.service';
import { AuthComponent } from './views/auth/auth.component';
import { ErrorComponent } from './views/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { SingleProductComponent } from './views/single-product/single-product.component';
import { AuthService } from './services/auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewProductComponent } from './views/new-product/new-product.component';
import { EditProductComponent } from './views/edit-product/edit-product.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    AuthComponent,
    ErrorComponent,
    HeaderComponent,
    SingleProductComponent,
    NewProductComponent,
    EditProductComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
