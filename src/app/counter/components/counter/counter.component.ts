import { Component } from "@angular/core";

@Component({
  selector: 'app-counter', //? Es el nombre de como se definira en el HTML <app-counter></app-counter>
  template: `
    <p>Counter: {{counter}}</p>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>


  `
})
export class CounterCompenent {
  public counter: number = 10;

  increaseBy( value: number): void {
    this.counter += value;
    // this.counter = value -1
  }

  resetCounter():void {
    this.counter = 10
  }
}
