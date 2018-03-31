import { Component, OnInit, Input } from '@angular/core';
import { gameBoard } from '../models/gameBoard';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent {
  @Input() childGameBoard;
  @Input() isPlaying;
  @Input() currentCharacter;

  renderGameContainer = function(){
    return {'position': 'relative',
    'border': '3px solid black',
    'width': this.childGameBoard.width*100 + "px",
    'height': this.childGameBoard.height*100 + "px",
    'background-color': 'black'
    }
  }

  renderSquare = function(index){
    let myStyles = {};
    myStyles['position'] = 'absolute';
    myStyles['top'] = Math.floor(index / gameBoard.height) * 100 + "px";
    myStyles['left'] = index % gameBoard.width * 100 + "px";
    myStyles['height'] = '100px';
    myStyles['width'] = '100px';
    myStyles['background-image'] = 'url(assets/img/spritesheet.png)';
    myStyles['background-size'] = '1600px 1600px';
    if (Math.floor(index / gameBoard.width) === 0){
      myStyles['background-position'] = '-0px -0px';
    } else if (Math.floor(index / gameBoard.width) === 1){
      let randomNumber = Math.floor(Math.random()*6);
      if (randomNumber === 1){
        myStyles['background-position'] = '-700px 0px';
      } else if (randomNumber === 2){
        myStyles['background-position'] = '-1200px -400px';
      } else {
        myStyles['background-position'] = '-0px -100px';
      }
    } else if (Math.floor(index / gameBoard.width) === 2){
      myStyles['background-position'] = '-0px -200px';
    } else {
      myStyles['background-position'] = '-200px -300px';
    }
    return myStyles;
  }

  renderSprite = function(index){
    let myStyles = {};
    myStyles['top'] = Math.floor(index / gameBoard.height) * 100 + "px";
    myStyles['left'] = index % gameBoard.width * 100 + "px";
    myStyles['height'] = '100px';
    myStyles['width'] = '100px';
    myStyles['background-size'] = '1600px 1600px';
    if (gameBoard.board[index].player){
      myStyles['background-image'] = 'url(assets/img/spritesheet.png)';
      myStyles['background-position'] = this.currentCharacter.imgPath;
      console.log(this.currentCharacter.imgPath);
    }
    if (gameBoard.board[index].monster){
      myStyles['background-image'] = 'url(assets/img/spritesheet.png)';
      myStyles['background-position'] = gameBoard.board[index].monster.imgPath;
    }
    if (gameBoard.board[index].item){
      myStyles['background-image'] = 'url(assets/img/spritesheet.png)';
      myStyles['background-position'] = '-1500px -1100px';
    }
    return myStyles;
  }
}
