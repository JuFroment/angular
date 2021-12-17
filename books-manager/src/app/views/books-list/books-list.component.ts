import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BookService } from '../../services/book/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books!: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.books;
  }

  onClickUpdateStatus(arrayIndex: number) {
    this.bookService
    .updateStatusForBookId(this.books[arrayIndex].id)
    .then((book: Book) => {
      this.books[arrayIndex] = book;
    });
  }

  onClickUpdateAllStatus(newStatus: boolean) {
    this.bookService.updateAllStatus(newStatus)
    .then((books: Book[]) => { //promesse tenue
      this.books = books;
    });
  }

  onClickDeleteBook(arrayIndex: number) {
    this.bookService.deleteBook(this.books[arrayIndex].id)
    .then(() => {
      // this.books.splice(arrayIndex, 1);
    });
  }

}
