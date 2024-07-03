import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'superman';
  public age: number = 30;

  //* Los getters son funciones que se utilizan para obtener el valor de una propiedad de un objeto (son usados como propiedades).
  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'batman';
  }

  changeAge(): void {
    this.age = 45
  }

  resetHero(): void {
    this.name = 'superman';
    this.age = 30;
  }
}
