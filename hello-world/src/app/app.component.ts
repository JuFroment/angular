import { Component } from '@angular/core';


// décorateur - Instruction donnée à Angular pour décorer la class
@Component({
  // balise dans le fichier index.html
  selector: 'app-root',
  // fichier affiché quand on appelle le fichier app-root
  templateUrl: './app.component.html',
  // style lié à ce composant
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstnameToInput: string;
  lastnameToInput: string;
  age: number;

  constructor() {
    this.firstnameToInput = 'Jessica';
    this.lastnameToInput = 'Rottedanslefrigo';
    this.age = 45;
}

onClickShowAge() {
  alert(this.age);
}

}
