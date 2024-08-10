import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';
import { identifierName } from '@angular/compiler';

// console.log(uuid());
@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 500,
  }, {
    id: uuid(),
    name: 'Goku',
    power: 15000,
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 14000,
  }
];

  addCharacter(character: Character): void {
    console.log('Adding a new character MainPage');

    const newCharacter: Character = {
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter);
    // console.log(character);
  }

  deletedCharacterById( id: string) {
    console.log('Deleting a character MainPage');
    this.characters = this.characters.filter(character => character.id !== id);

    // this.characters.splice(id, 1)
    // this.characters.splice(index, 1);
  }

}
