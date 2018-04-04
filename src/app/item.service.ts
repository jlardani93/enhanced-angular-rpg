import { Injectable, OnInit } from '@angular/core';
import { Item } from './models/items';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ItemService {
  itemsData: FirebaseListObservable<any>;
  items: Item[] = [];


  constructor(private database: AngularFireDatabase) {
    this.itemsData = database.list('items');
  }

  addItem(newItem) {
    this.itemsData.push(newItem);
    console.log(this.items);
  }
}
