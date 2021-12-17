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
    return new Promise<void>(
      (res, rej) => {
        if (email === "nebel@gmail.com" && password === 'azerty') {
          this.token.next('TKJOGNezlkzgek^lqsdlv');
          res();
        } else {
          rej('Touguel, les identifiants sont incorrects, cheh ');
        }
      }
    );
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
