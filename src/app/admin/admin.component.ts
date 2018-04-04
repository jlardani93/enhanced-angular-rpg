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
        this.itemService.items[this.itemService.items.length-1].key = item.$key;
        console.log(item.$key);
      })
    })
  }

  renderItemImage(imgPath: string){
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

  removeItem(itemKey){
    if (confirm("Are you sure you want to permenantly delete this item from the database?")){
      this.itemService.removeItem(itemKey);
    }
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
