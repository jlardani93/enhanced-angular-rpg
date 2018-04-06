import { Component, OnInit, Input } from '@angular/core';
import { GameLogService } from '../game-log.service';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css'],
  providers: [ GameLogService ]
})
export class CharacterDisplayComponent {

  @Input() childCurrentCharacter;

  constructor(){}
  gameLogService = GameLogService;
  renderItem(imgPath){
    let myStyles = {};
    myStyles['width'] = '100px';
    myStyles['height'] = '100px';
    myStyles['background-image'] = 'url("../assets/img/spritesheet.png")';
    myStyles['background-size'] = '1600px 1600px';
    myStyles['background-position'] = imgPath;
    return myStyles;
  }

  renderLogEntry(styleCode){
    let myStyles = {};
    switch (styleCode){
      case 2:
        myStyles['font-weight'] = 'bold';
        break;
      case 3:
        myStyles['color'] = 'gold';
        myStyles['font-weight'] = 'bold';
        break;
    }
    let element = document.getElementById("gameLog");
    element.scrollTop = element.scrollHeight;
    return myStyles;
  }
}
