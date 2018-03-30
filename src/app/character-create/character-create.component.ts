import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Character, characterFactory } from '../models/characters'

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css']
})
export class CharacterCreateComponent {

@Input() currentCharacter;
@Output() sendUpCurrentCharacter = new EventEmitter();

createCharacter(name: string, characterClass: string){
    this.sendUpCurrentCharacter.emit(characterFactory.createCharacter(name, characterClass));
  }

}
