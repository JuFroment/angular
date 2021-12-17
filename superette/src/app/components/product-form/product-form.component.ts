import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Output() formSubmitted: EventEmitter<Product>;
  @Input() buttonLabel!: string;
  @Input() productToEdit!: Product;

  product!: Product;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Product>();
   }

  ngOnInit(): void {
    this.initForm();
  }

    onSubmitProductForm(): void {
      this.formSubmitted.emit(this.product)
    }

  private initForm(): void {
    this.product = this.productToEdit ? this.productToEdit : this.product = new Product(0, '', false);
    this.form = this.fb.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],

      status: [null]
    });
  }

}

