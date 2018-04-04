import { Component, OnInit } from '@angular/core';
import { Item } from '../models/items';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ItemService]
})
export class AdminComponent implements OnInit {

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.itemService.itemsData.subscribe(data => {
      this.itemService.items = [];
      data.forEach(item => {
        this.itemService.items.push(new Item(item.itemName, item.attribute, item.magnitude, item.imagePosition));
      })
    })
  }

  showItems: boolean = false;

  toggleItems(){
    this.showItems = (this.showItems) ? false : true;
    console.log(this.itemService.itemsData);
    console.log(this.itemService.items);
  }

  newItem(itemName: string, attribute: string, magnitude: string, imagePosition: string){
    let newItem = {
      itemName: itemName,
      attribute: attribute,
      magnitude: magnitude,
      imagePosition: imagePosition
    }
    this.itemService.addItem(newItem);
  }
}
