import { Component } from '@angular/core';
import Homework from '../../../../ts-task/Homework';
import User from '../../../../ts-task/User';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent {
  constructor() { }

  homework1 = new Homework('typescript', 'learn typescript', 'done');
  homework2 = new Homework('React', 'learn React for one night', 'not done');
  user1 = new User('Andrei', 'Saiko', [this.homework1, this.homework2]);
  user2 = new User('Slim', 'Shady', [this.homework2, this.homework1]);
  users = [this.user1, this.user2];
}
