import { Component, OnInit } from '@angular/core';
import { Item } from '../models/items';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-admin-items',
  templateUrl: './admin-items.component.html',
  styleUrls: ['./admin-items.component.css'],
  providers: [ItemService]
})
export class AdminItemsComponent implements OnInit {

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
  }

  itemName = "";

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

  renderPreviewImage(imgPath: string, e){
    e.style.height = '100px';
    e.style.width = '100px';
    e.style.border = '1px solid black';
    e.style['background-size'] = '1600px 1600px';
    e.style['background-image'] = 'url("../assets/img/spritesheet.png")';
    e.style['background-position'] = imgPath;
    e.style.display = 'block';
    e.style['margin-right'] = 'auto';
    e.style['margin-left'] = 'auto';
  }

  removeItem(itemKey){
    if (confirm("Are you sure you want to permenantly delete this item from the database?")){
      this.itemService.removeItem(itemKey);
    }
  }

  showItems: boolean = false;

  toggleItems(){
    this.showItems = (this.showItems) ? false : true;
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
