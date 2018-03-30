export class Item {
  constructor(public name: string, attribute, magnitude){
    this.useItem = (()=>{
      return function(consumer){
        consumer[attribute]+=magnitude;
        return `${this.name} was used by ${consumer.name} to increase ${attribute} by ${magnitude}`
      }
    })();
  }
  useItem;
}

export let itemsLibrary = {
  healthPotion: new Item('Health Potion', 'Health', 30),
  manaPotion: new Item('Mana Potion', 'Mana', 50)
}
