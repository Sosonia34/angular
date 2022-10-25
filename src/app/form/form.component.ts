mport { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  model: Order = new Order("" , 0, new Date(), "");
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.model);
  }
}
export class Order {
  constructor(
      public title: string,
      public quantity: number,
      public date: Date,
      public contact: string
  ) {}
}