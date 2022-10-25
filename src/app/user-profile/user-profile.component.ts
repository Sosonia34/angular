import { Component, OnInit } from '@angular/core';
import { User} from '../models/user';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class UserProfileComponent implements OnInit {
  user: User = {
    name: 'Doe',
    firstname: 'John',
    age : 25,
    quote: '',
    imgUrl: 'https://randomuser.me/api/portraits',
    hide: true
  }
  constructor() {
    this.user.quote = 'beer or  not beer';
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }
   lookAge(): void {
    this.user.hide = !this.user.hide;
   }

  printQuote(): void {
    console.log(this.user.quote),
    console.log(this.user.name),
    console.log(this.user.firstname),
    console.log(this.user.age),
    console.log(this.user.imgUrl)
  }
}