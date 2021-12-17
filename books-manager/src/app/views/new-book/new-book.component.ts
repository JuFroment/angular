import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { BookService } from '../../services/book/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitNewBook(bookToAdd: Book) {
    this.bookService
    .addBook(bookToAdd)
    .then(() => {
      this.router.navigateByUrl('/books')
    });
  }

}
