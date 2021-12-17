import { keyframes } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Book } from '../../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  books: Book[];

  constructor() {
    this.books = [];

    for (let i = 1; i < 11; i++) {
      this.books.push(new Book(i,'Titre ' + i, 'Description ' + i,  'Auteur ' + i, true));
    }
   }

   getBookById(bookId: number): Promise<Book> {
    return new Promise<Book>(
      (res, rej) => {
        for(let [index, book] of this.books.entries()) {
          for (let book of this.books)
          if (book.id === bookId) {
            res(book)
            break;
          }
        }
       });
  }

  addBook(bookToAdd: Book): Promise<void> {
    return new Promise<void>((res, rej) => {
      bookToAdd.id = this.books[this.books.length -1].id + 1
      this.books.push(bookToAdd)
      res();
    })
  }

  editBook(editedBook: Book): Promise<void> {
    return new Promise<void>((res, rej) => {
      for (let [index, book] of this.books.entries()) {
        if (book.id === editedBook.id) {
          this.books[index] = editedBook;
          res()
          break;
        }
      }
    });
  }

   updateStatusForBookId(bookId: number): Promise<Book> {
     return new Promise<Book>(
       (res, rej) => {
         for(let [index, book] of this.books.entries()) {
           if(book.id === bookId) {
             this.books[index].available = !this.books[index].available;
             res(this.books[index]);
             break;
           }
         }
        });
   }



   updateAllStatus(newStatus: boolean): Promise<Book[]> {

     return new Promise<Book[]>(
       (res, rej) => {
         this.books.forEach(book => book.available = newStatus);
         res(this.books); //success
       });
   }

   deleteBook(bookIdToDelete: number): Promise<void> {
     return new Promise<void> (
       (res, rej) => {

        for (let [index, book] of this.books.entries()) {
          if (book.id === bookIdToDelete) {
            this.books.splice(index, 1);
            res();
            break;
        }
      }
     });
   }
}
