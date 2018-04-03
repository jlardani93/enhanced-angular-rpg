import { Monster, monsterFactory, monsterLevelKey } from './monsters';
import { Item, itemsLibrary } from './items';

export let gameBoard = {
  board: [],
  board2d: [],
  width: 10,
  height: 10,
  activeMonsters: 0,
  generateGameBoard: function(character, roomNumber){
    this.board.splice(0, this.board.length);
    this.board2d.splice(0, this.board2d.length);
    for (let i = 0; i < this.height*this.width; i++) {
      this.board.push({
        player: false,
        monster: null,
        item: null,
        textureImgPath: null
      })
    }
    let index = 0;
    for (let j = 0; j < this.height; j++) {
      this.board2d.push([]);
      for (let k = 0; k < this.width; k++) {
        this.board2d[j].push(this.board[index]);
        index++;
      }
    }

    let myMonsterNumber = (roomNumber >= 6) ? 5 : roomNumber;
    let myItemNumber = Math.floor(Math.random()*2)+1;
    this.addMonster(myMonsterNumber, character.level);
    this.addItem(myItemNumber);
    this.generateTextures();
  },

  addMonster: function(amount: number, level: number){
    for (let i = 1; i <= amount; i++){
      let randomIndex = Math.floor(Math.random()*this.board.length);
      if (randomIndex <= this.width*2 || this.board[randomIndex].monster){
        this.addMonster(1, level);
        break;
      }
      let randomMonsterLevel = Math.floor(Math.random()*level)+1;
      this.board[randomIndex].monster = monsterFactory.createMonster(monsterLevelKey[randomMonsterLevel.toString()]);
      this.activeMonsters += 1;
    }
  },

  addItem: function(amount: number){
    for (let i = 1; i <= amount; i++){
      let randomIndex = Math.floor(Math.random()*this.board.length);
      if (randomIndex <= this.width*2){
        this.addItem(1);
        break;
      }
      this.board[randomIndex].item = itemsLibrary.healthPotion;
    }
  },

  generateTextures: function(){
    for (let i = 0; i < this.board.length; i++) {
      if (Math.floor(i / this.width) === 0){
        this.board[i].textureImgPath = '-0px -0px';
      } else if (Math.floor(i / this.width) === 1){
        let randomNumber = Math.floor(Math.random()*6);
        if (randomNumber === 1){
          this.board[i].textureImgPath = '-700px 0px';
        } else if (randomNumber === 2){
          this.board[i].textureImgPath = '-1200px -400px';
        } else {
          this.board[i].textureImgPath = '-100px -100px';
        }
      } else if (Math.floor(i / this.width) === 2){
        this.board[i].textureImgPath = '-0px -200px';
      } else {
        this.board[i].textureImgPath = '-200px -300px';
      }
    }
  }
}
