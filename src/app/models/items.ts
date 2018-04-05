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
