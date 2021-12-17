import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthComponent } from './views/auth/auth.component';
import { BooksListComponent } from './views/books-list/books-list.component';
import { EditBookComponent } from './views/edit-book/edit-book.component';
import { ErrorComponent } from './views/error/error.component';
import { NewBookComponent } from './views/new-book/new-book.component';
import { SingleBookComponent } from './views/single-book/single-book.component';

const routes: Routes = [
  {path: '', component: AuthComponent}, //chemin principal
  {path: 'books', canActivate:[AuthGuard], component: BooksListComponent},
  {path: 'books/new', canActivate:[AuthGuard], component: NewBookComponent},
  {path: 'books/:id', canActivate:[AuthGuard], component: SingleBookComponent},
  {path: 'books/edit/:id', canActivate:[AuthGuard], component: EditBookComponent},
  {path: 'not-found', component: ErrorComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
