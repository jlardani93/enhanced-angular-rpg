import { Component, OnInit, Input } from '@angular/core';
import { GameLogService } from '../game-log.service'; 

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css']
})
export class CharacterDisplayComponent {

  @Input() childCurrentCharacter;

  gameLog = [];


  renderItem(imgPath){
    let myStyles = {};
    myStyles['width'] = '100px';
    myStyles['height'] = '100px';
    myStyles['background-image'] = 'url("../assets/img/spritesheet.png")';
    myStyles['background-size'] = '1600px 1600px';
    myStyles['background-position'] = imgPath;
    return myStyles;
  }
}
