/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';
import {User} from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: User = new User("", "", "", "");

  constructor() {
  }

  onSubmit(): void {
    console.log('Formulaire envoyé !');
  }
}