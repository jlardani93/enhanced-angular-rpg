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
  }
}
