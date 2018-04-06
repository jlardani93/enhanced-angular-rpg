import { Injectable, OnInit } from '@angular/core';
import { Monster } from './models/monsters';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MonsterService {
  monstersData: FirebaseListObservable<any>;
  monsters = [];
  monsterLevelKey = {};

  constructor(private database: AngularFireDatabase) {
    this.monstersData = database.list('monsters');
    this.monstersData.subscribe(data => {
      this.monsters = [];
      this.monsterLevelKey = {};
      data.forEach(monster => {
        let myMonster = new Monster(monster.name, monster["level"], parseInt(monster.maxHealth), parseInt(monster.maxMana), parseInt(monster.defense), parseInt(monster.strength), parseInt(monster.intelligence), parseInt(monster.dexterity), parseInt(monster.luck), monster.attackAttribute, parseInt(monster.killExperience), monster.imgPath);
        myMonster.key = monster.$key;
        this.monsters.push(myMonster);
        if (this.monsterLevelKey[myMonster.level]){
          this.monsterLevelKey[monster["level"]].push(myMonster);
        } else {
          this.monsterLevelKey[monster["level"]] = [];
          this.monsterLevelKey[monster.level].push(myMonster);
        }
      })
    })
  }

  addMonster(newMonster) {
    this.monstersData.push(newMonster);
  }

  removeMonster(monsterKey) {
    let monsterToRemove = this.database.object('monsters/' + monsterKey);
    monsterToRemove.remove();
  }


}
