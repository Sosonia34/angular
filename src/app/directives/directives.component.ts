/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  isAdmin : boolean = true;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }
  toogleAdmin(): void {
    this.isAdmin = !this.isAdmin;
 }
}
