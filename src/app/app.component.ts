import { Component } from '@angular/core';
import { Character } from './models/characters';
import { gameBoard } from './models/gameBoard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  currentCharacter: Character = null;
  isFighting: boolean = false;
  isPlaying: boolean = false;
  masterGameBoard = gameBoard;

  setCurrentCharacter = function(character: Character){
    this.currentCharacter = character;
  }

  setIsPlaying = function(){
    this.isPlaying = true;
    gameBoard.generateGameBoard(); 
  }
}
