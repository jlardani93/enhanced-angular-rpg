import { Component, OnInit, Input } from '@angular/core';
import { gameBoard } from '../models/gameBoard';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent {
  @Input() childGameBoard;

  renderSquare = function(index){
    let myStyles = {};
    myStyles['position'] = 'absolute';
    myStyles['top'] = Math.floor(index / gameBoard.height) * 100 + "px";
    myStyles['left'] = index % gameBoard.width * 100 + "px";
    return myStyles;
  }
}
