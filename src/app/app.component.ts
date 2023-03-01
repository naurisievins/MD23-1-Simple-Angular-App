import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  clicked = false;
  indexes: number[] = [];
  total = 0;

  handleClick = (i: number, price: number) => {
    const index = this.indexes.indexOf(i);
    if (index > -1) {
      this.indexes.splice(index, 1);
      this.total -= price;
    } else {
      this.indexes.push(i);
      this.total += price;
    }
  };

  services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 },
  ];
}
