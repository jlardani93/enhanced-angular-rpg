import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Character } from '../models/characters';
import { Monster } from '../models/monsters';

@Component({
  selector: 'app-game-fight',
  templateUrl: './game-fight.component.html',
  styleUrls: ['./game-fight.component.css']
})
export class GameFightComponent implements OnInit {
  @Input() currentMonster;
  @Input() currentCharacter;
  @Output() doneFighting = new EventEmitter();
  attacking: boolean = false;
  battleLog = [];

  addToBL(message: string, styleCode: number){
    this.battleLog.push({
      message: message,
      styleCode: styleCode
    })
  }

  ngOnInit(){
    this.battleLog = [];
  }

  renderMonsterImage(){
    let myStyle = {
      'height': '100px',
      'width': '100px',
      'background-image': 'url("../assets/img/spritesheet.png")',
      'background-size': '1600px 1600px',
      'background-position': this.currentMonster.imgPath,
      'display': 'block',
      'margin-right': 'auto',
      'margin-left': 'auto',
      'margin-top': '30px',
      'margin-bottom': '30px'
    }
    return myStyle;
  }

  renderLogEntry(styleCode: number){
    let myStyles = {
      'width': '100%',
      'margin': '5px',
      'margin-right': '10px',
      'margin-left': 'auto',
    };
    if (styleCode === 2) {
      myStyles['color'] = 'red';
    }
    if (styleCode === 3) {
      myStyles['font-weight'] = 'bold';
    }
    if (styleCode === 4) {
      myStyles['color'] = 'red';
      myStyles['font-weight'] = 'bold';
    }
    if (styleCode === 5) {
      myStyles['color'] = 'gold';
      myStyles['font-weight'] = 'bold';
    }
    let element = document.getElementById("battleLog");
    element.scrollTop = element.scrollHeight;
    return myStyles;
  }

  attack(){
    this.attacking = true;
    let playerMove = ()=>{this.addToBL(this.currentCharacter.attack(this.currentMonster), 1);}
    let monsterMove = ()=>{this.addToBL(this.currentMonster.attack(this.currentCharacter), 2);}
    this.attackSequence(playerMove, monsterMove);
  }

  useAbility(index: number, caster: Character, target: Monster){
    this.attacking = true;
    let playerMove = ()=>{this.addToBL(this.currentCharacter.abilities[index].cast(caster, target), 1);};
    let monsterMove = ()=>{this.addToBL(this.currentMonster.attack(this.currentCharacter), 2);};
    this.attackSequence(playerMove, monsterMove);
  }

  attackSequence(playerMove, monsterMove){
    let resetAttacking = ()=>{setTimeout(()=>{this.attacking = false; this.checkFightCondition()}, 1000)};
    playerMove();
    setTimeout(()=>{ if (this.checkFightCondition()){ monsterMove(); resetAttacking();}}, 1000);
  }

  checkFightCondition(){
    if (this.currentMonster.health <= 0){
      this.addToBL((`${this.currentCharacter.name} vanquished a ${this.currentMonster.name}`), 3);
      this.addToBL((`${this.currentCharacter.name} gained ${this.currentMonster.killExperience} experience`), 5);
      this.currentCharacter.experience += this.currentMonster.killExperience;
      this.currentCharacter.checkIfLevel();
      setTimeout(()=>{
        this.doneFighting.emit(true);
        this.attacking = false;
      }, 2000);
      return false;
    }
    if (this.currentCharacter.health <= 0){
      this.addToBL((`${this.currentCharacter.name} was slaughtered by a ${this.currentMonster.name}`), 4);
      setTimeout(()=>{
        this.doneFighting.emit(false);
        this.attacking = false;
      }, 2000);
      return false;
    }
    return true;
  }
}
