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
    myStyles['background-position'] = gameBoard.board[index].textureImgPath;
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
    }
    if (gameBoard.board[index].monster){
      myStyles['background-image'] = 'url(assets/img/spritesheet.png)';
      myStyles['background-position'] = gameBoard.board[index].monster.imgPath;
    }
    if (gameBoard.board[index].item){
      myStyles['background-image'] = 'url(assets/img/spritesheet.png)';
      myStyles['background-position'] = '-1500px -1100px';
    }
    if ((index === ((gameBoard.width*gameBoard.height)/2)+(gameBoard.width-1)) && !gameBoard.activeMonsters){
      myStyles['background-size'] = '100px 100px';
      myStyles['background-image'] = 'url(assets/img/arrow.png)';
    }
    return myStyles;
  }
}
