import { Injectable, OnInit } from '@angular/core';
import { Monster } from './models/monsters';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MonsterService {
  monstersData: FirebaseListObservable<any>;
  monsters = [];

  constructor(private database: AngularFireDatabase) {
    this.monstersData = database.list('monsters');
    this.monstersData.subscribe(data => {
      this.monsters = [];
      data.forEach(monster => {
        let myMonster = new Monster(monster.name, parseInt(monster.maxHealth), parseInt(monster.maxMana), parseInt(monster.defense), parseInt(monster.strength), parseInt(monster.intelligence), parseInt(monster.dexterity), parseInt(monster.luck), monster.attackAttribute, parseInt(monster.killExperience), monster.imgPath);
        myMonster.key = monster.$key;
        this.monsters.push(myMonster);
      })
    })
  }

  addMonster(newMonster) {
    this.monstersData.push(newMonster);
    console.log(this.monsters);
  }

  removeMonster(monsterKey) {
    let monsterToRemove = this.database.object('monsters/' + monsterKey);
    monsterToRemove.remove();
  }


}
