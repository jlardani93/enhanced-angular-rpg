import { Component, OnInit } from '@angular/core';
import { Monster } from '../models/monsters';
import { MonsterService } from '../monster.service'

@Component({
  selector: 'app-admin-monsters',
  templateUrl: './admin-monsters.component.html',
  styleUrls: ['./admin-monsters.component.css'],
  providers: [ MonsterService ]
})
export class AdminMonstersComponent implements OnInit {

  constructor(private monsterService: MonsterService) { }

  ngOnInit() {
  }

  showMonsters: boolean = false;

  toggleMonsters(){
    this.showMonsters = (this.showMonsters) ? false : true;
  }

  renderMonsterImage(imgPath){
    let myStyle = {
      'height': '100px',
      'width': '100px',
      'border': '1px solid black',
      'background-size': '1600px 1600px',
      'background-image': 'url("../assets/img/spritesheet.png")',
      'background-position': imgPath,
      'display': 'block',
      'margin-right': 'auto',
      'margin-left': 'auto'
    };
    return myStyle;
  }

  renderPreviewImage(imgPath: string, e){
    e.style.height = '100px';
    e.style.width = '100px';
    e.style.border = '1px solid black';
    e.style['background-size'] = '1600px 1600px';
    e.style['background-image'] = 'url("../assets/img/spritesheet.png")';
    e.style['background-position'] = imgPath;
    e.style.display = 'block';
    e.style['margin-right'] = 'auto';
    e.style['margin-left'] = 'auto';
  }

  newMonster(name, maxHealth, maxMana, defense, strength, intelligence, dexterity, luck, attackAttribute, killExperience, imgPath){
    let myMonsterObject = {
      name: name,
      maxHealth: maxHealth,
      maxMana: maxMana,
      defense: defense,
      strength: strength,
      intelligence: intelligence,
      dexterity: dexterity,
      luck: luck,
      attackAttribute: attackAttribute,
      killExperience: killExperience,
      imgPath: imgPath
    }
    this.monsterService.addMonster(myMonsterObject);
  }

  removeMonster(monsterKey){
    this.monsterService.removeMonster(monsterKey);
  }
}
