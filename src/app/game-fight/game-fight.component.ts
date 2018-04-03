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
  battleLog: string[] = [];

  ngOnInit(){
    this.battleLog = [{
      message: "hallelujah",
      styleCode: 1
    }];
    console.log(this.battleLog);
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

  renderLogEntry(){

  }

  attack(){
    this.attacking = true;
    let playerMove = ()=>{console.log(this.currentCharacter.attack(this.currentMonster));}
    let monsterMove = ()=>{console.log(this.currentMonster.attack(this.currentCharacter));}
    this.attackSequence(playerMove, monsterMove);
  }

  useAbility(index: number, caster: Character, target: Monster){
    this.attacking = true;
    let playerMove = ()=>{console.log(this.currentCharacter.abilities[index].cast(caster, target));};
    let monsterMove = ()=>{console.log(this.currentMonster.attack(this.currentCharacter));};
    this.attackSequence(playerMove, monsterMove);
  }

  attackSequence(playerMove, monsterMove){
    let resetAttacking = ()=>{setTimeout(()=>{this.attacking = false; this.checkFightCondition()}, 1000)};
    playerMove();
    setTimeout(()=>{ if (this.checkFightCondition()){ monsterMove(); resetAttacking();}}, 1000);
  }

  checkFightCondition(){
    if (this.currentMonster.health <= 0){
      console.log(`${this.currentCharacter.name} vanquished a ${this.currentMonster.name}`);
      console.log(`${this.currentCharacter.name} gained ${this.currentMonster.killExperience} experience`);
      this.currentCharacter.experience += this.currentMonster.killExperience;
      this.checkIfLevel();
      this.doneFighting.emit(true);
      this.attacking = false;
      return false;
    }
    if (this.currentCharacter.health <= 0){
      console.log(`${this.currentCharacter.name} was slaughtered by a ${this.currentMonster.name}`);
      this.doneFighting.emit(false);
      this.attacking = false;
      return false;
    }
    return true;
  }

  checkIfLevel(){
    if (this.currentCharacter.experienceToNext <= this.currentCharacter.experience) {
      this.currentCharacter.levelUp();
      this.checkIfLevel();
    }
  };
}
