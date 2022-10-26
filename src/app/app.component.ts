/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class AppComponent {
  title = 'Quete 8 Angular';

  constructor() { }
  onomatopiaList: string[] = [];

  onReceiveOnomatopia(event: string): void {
    this.onomatopiaList.push(event);
  }
}
