import { Component, HostListener } from '@angular/core';
import { Character } from '../models/characters';
import { gameBoard } from '../models/gameBoard';
import { Monster } from '../models/monsters';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [ItemService]
})
export class GameComponent {

  constructor(private itemService: ItemService){};

  title = 'app works!';
  currentCharacter: Character = null;
  currentMonster: Monster = null;
  isFighting: boolean = false;
  isPlaying: boolean = false;
  masterGameBoard = gameBoard;
  roomNumber: number = 1;
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event){
    let resetBool = false;
    let tempSquare = gameBoard.board2d[this.currentCharacter.y][this.currentCharacter.x];
    if (event.key === "ArrowLeft" && this.currentCharacter.x !== 0 && (resetBool = true)) this.currentCharacter.x-=1;
    if (event.key === "ArrowRight" && this.currentCharacter.x !== gameBoard.width-1 && (resetBool = true)) this.currentCharacter.x+=1;
    if (event.key === "ArrowRight" && this.currentCharacter.x === gameBoard.width-1 && (resetBool = true) && !gameBoard.activeMonsters) {
      gameBoard.generateGameBoard(this.currentCharacter, this.roomNumber);
      this.roomNumber += 1;
      this.currentCharacter.x -= (gameBoard.width-1);
      gameBoard.board2d[this.currentCharacter.y][this.currentCharacter.x].player = true;
    }
    if (event.key === "ArrowUp" && this.currentCharacter.y !== 2 && (resetBool = true)) this.currentCharacter.y-=1;
    if (event.key === "ArrowDown" && this.currentCharacter.y !== gameBoard.height-1 && (resetBool = true)) this.currentCharacter.y+=1;
    if (resetBool) tempSquare.player = false;
    gameBoard.board2d[this.currentCharacter.y][this.currentCharacter.x].player = true;
    if (gameBoard.board2d[this.currentCharacter.y][this.currentCharacter.x].monster) {
      this.currentMonster = gameBoard.board2d[this.currentCharacter.y][this.currentCharacter.x].monster;
      this.isFighting = true;
    }
    if (gameBoard.board2d[this.currentCharacter.y][this.currentCharacter.x].item){
      this.currentCharacter.items.push(gameBoard.board2d[this.currentCharacter.y][this.currentCharacter.x].item);
      gameBoard.board2d[this.currentCharacter.y][this.currentCharacter.x].item = null;
    }
  }

  setCurrentCharacter = function(character: Character){
    this.currentCharacter = character;
  }

  setIsPlaying = function(){
    this.isPlaying = true;
    gameBoard.generateGameBoard(this.currentCharacter, this.roomNumber);
    gameBoard.board2d[this.currentCharacter.y][this.currentCharacter.x].player = true;
    this.currentCharacter.items.push(this.itemService.items[0]);
    this.currentCharacter.items.push(this.itemService.items[1]);

  }

  endFight = function(victory){
    this.isFighting = false;
    if (victory) {
      this.currentMonster = null;
      gameBoard.activeMonsters -= 1;
      console.log(gameBoard.activeMonsters);
      gameBoard.board2d[this.currentCharacter.y][this.currentCharacter.x].monster = null;
    }
    if (!victory) {
      console.log("you have died");
    }
  }
}
