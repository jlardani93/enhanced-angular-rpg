import { Injectable, OnInit } from '@angular/core';
import { Item } from './models/items';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ItemService {
  itemsData: FirebaseListObservable<any>;
  items: Item[] = [];


  constructor(private database: AngularFireDatabase) {
    this.itemsData = database.list('items');
    this.itemsData.subscribe(data => {
      this.items = [];
      data.forEach(item => {
        this.items.push(new Item(item.itemName, item.attribute, parseInt(item.magnitude), item.imagePosition));
        this.items[this.items.length-1].key = item.$key;
        console.log(item.$key);
      })
    })
  }

  addItem(newItem) {
    this.itemsData.push(newItem);
    console.log(this.items);
  }

  removeItem(itemKey) {
    let itemToRemove = this.database.object('items/' + itemKey);
    itemToRemove.remove();
  }
}
