import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { ProductsListComponent } from './view/products-list/products-list.component';
import { AuthComponent } from './views/auth/auth.component';
import { EditProductComponent } from './views/edit-product/edit-product.component';
import { ErrorComponent } from './views/error/error.component';
import { NewProductComponent } from './views/new-product/new-product.component';
import { SingleProductComponent } from './views/single-product/single-product.component';

const routes: Routes = [
  {path:'', component: AuthComponent},
  {path:'products', canActivate: [AuthGuard], component: ProductsListComponent},
  {path:'products/new', canActivate: [AuthGuard], component: NewProductComponent},
  {path:'products/:id', canActivate: [AuthGuard], component: SingleProductComponent},
  {path:'products/edit/:id', canActivate: [AuthGuard], component: EditProductComponent},
  {path:'not-found', component: ErrorComponent},
  {path:'**',redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
