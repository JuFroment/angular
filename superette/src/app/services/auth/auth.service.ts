import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<string>;

  constructor() {
    this.token = new BehaviorSubject<string>('');
   }

  signIn(email: string, password: string): Promise<void> {
    return new Promise<void>((res, rej) => {
      if (email === 'nebel@gmail.com' && password === 'azerty') {
        this.token.next('gzejon')
        res();
      } else {
        rej('CHEH, retente ta chance pécore !')
      }
    });


  }
  signOut(): Promise<void> {
    return new Promise<void> (
      (res, rej) => {
        this.token.next('');
        res();
      }
    );
  }
}
