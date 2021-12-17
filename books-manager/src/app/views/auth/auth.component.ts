import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  email!: string;
  password!: string;

  errMsg!: string;

  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit(): void {
    this.email = "nebel@gmail.com"
    this.password = "azerty"
  }
  onSubmitAuthForm(form: NgForm): void {

    this.errMsg = '';

    this.authService
      .signIn(this.email, this.password)
      .then(() => {
        this.router.navigateByUrl('books');
      })
      .catch((errMsg) => {
        this.errMsg = errMsg;
      });

  }
}
