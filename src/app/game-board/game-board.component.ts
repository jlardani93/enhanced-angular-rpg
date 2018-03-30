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

  renderGameContainer = function(){
    return {'position': 'relative',
    'border': '3px solid black',
    'width': this.childGameBoard.width*100 + "px",
    'height': this.childGameBoard.height*100 + "px"
    }
  }
  
  renderSquare = function(index){
    let myStyles = {};
    myStyles['position'] = 'absolute';
    myStyles['top'] = Math.floor(index / gameBoard.height) * 100 + "px";
    myStyles['left'] = index % gameBoard.width * 100 + "px";
    myStyles['height'] = '100px';
    myStyles['width'] = '100px';
    myStyles['border'] = '1px solid black';
    return myStyles;
  }
}
