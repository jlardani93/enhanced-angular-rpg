import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../models/characters';
import { Monster } from '../models/monsters';

@Component({
  selector: 'app-game-fight',
  templateUrl: './game-fight.component.html',
  styleUrls: ['./game-fight.component.css']
})
export class GameFightComponent  {
  @Input() currentMonster;
  @Input() currentCharacter;
  @Output() doneFighting = new EventEmitter();
  attacking: boolean = false;

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
      console.log("done fighting!");
      this.doneFighting.emit(true);
      this.attacking = false; 
      return false;
    }
    return true;
  }
}
