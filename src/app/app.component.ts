import { Component } from '@angular/core';
import { Character } from './models/characters'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  currentCharacter: Character = null;

  setCurrentCharacter = function(character: Character){
    this.currentCharacter = character; 
  }
}
