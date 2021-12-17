import { Component } from '@angular/core';

// décorateur - Instruction donnée à Angular pour décorer la class
@Component({
  // balise dans le fichier index.html
  selector: 'app-root',
  // fichier affiché quand on appelle le fichier app-root
  templateUrl: './app.component.html',
  // style lié à ce composant
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: Array<any>;

  constructor() {
    this.users = [];

    const userOne = {
      firstname: 'Pas Julien',
      lastname: 'la Tortue',
      age: 29,
    };
    this.users.push(userOne);

    const userTwo = {
      firstname: 'Nebel',
      lastname: 'Weirdo',
      age: 35,
    };
    this.users.push(userTwo);

    const userThree = {
      firstname: 'Juney',
      lastname: 'Weirdo',
      age: 25,
    };
    this.users.push(userThree);
  }

  onClickShowAge(age: number) {
    alert(age);
  }

  onClickAddNewUser(): void {
    this.users.push({
      firstname: 'Nudye',
      lastname: 'le Gobelin',
      age: 20,
    });
  }

  generateStyles(index: number): any {
    const styles = {
      color: 'blue',
      textTransform: '',
    };

    if (index % 2 !== 0) {
      styles.color = 'red';
    } else {
      styles.textTransform = 'uppercase';
    }
    return styles;
  }
}
