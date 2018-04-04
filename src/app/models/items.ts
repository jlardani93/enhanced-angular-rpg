export class Item {
  constructor(public name: string, attribute, magnitude, public imgPath: string){
    this.useItem = (()=>{
      return function(consumer){
        consumer[attribute]+=magnitude;
        return `${this.name} was used by ${consumer.name} to increase ${attribute} by ${magnitude}`
      }
    })();
  }
  useItem;
  key;
}

export let itemsLibrary = {
  healthPotion: new Item('Health Potion', 'health', 30, '-1100px -1200px'),
  manaPotion: new Item('Mana Potion', 'mana', 50, '-1300px -1200px')
}
