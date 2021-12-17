import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Output() formSubmitted: EventEmitter<Book>;
  @Input() buttonLabel!: string;
  @Input() bookToEdit!: Book;

  book!: Book;

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Book>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmitBookForm(): void {
    this.formSubmitted.emit(this.book);
  }

  private initForm(): void {

    this.book = this.bookToEdit ? this.bookToEdit : new Book(0, '', '', '', false)
    //Un formulaire est un group dans lequel on aura des controles
    //Un controle équivaut a un champ
    this.form = this.fb.group( {
      title: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(30) ]],
      description: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100) ]],
      author: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(30) ]],
      available: [null]
    });
  }
}
