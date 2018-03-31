import { Monster, monsterFactory } from './monsters';
import { Item, itemsLibrary } from './items';

export let gameBoard = {
  board: [],
  board2d: [],
  width: 10,
  height: 10,
  generateGameBoard: function(){
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
    this.addMonster(2);
    this.addItem(1);
  },

  addMonster: function(amount: number){
    for (let i = 1; i <= amount; i++){
      let randomIndex = Math.floor(Math.random()*this.board.length);
      if (randomIndex <= this.width*2){
        this.addMonster(1);
        break;
      }
      this.board[randomIndex].monster = monsterFactory.createMonster('skeleton');
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
  }
}
