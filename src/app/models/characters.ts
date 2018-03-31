import { Item, itemsLibrary } from './items';
import { Monster } from './monsters';
import { abilitiesLibrary } from './abilities';

export class Character {
  constructor(public name: string, public characterClass: string, public maxHealth: number, public maxMana: number, public defense: number, public strength: number, public intelligence: number, public dexterity: number, public luck: number, attackAttribute, public imgPath: string, ...abilities: string[]){
    let that = this;
    this.health = this.maxHealth;
    this.mana = this.maxMana;
    this.attack = (()=>{
      return function(monster: Monster){
        monster.health -= this[attackAttribute];
        return `${this.name} attacked ${monster.name} for ${this[attackAttribute]} health.`
      }
    })();
    abilities.forEach(function(abilityName){
      that.abilities.push(abilitiesLibrary[abilityName]);
    })
  }

  x: number = 5;
  y: number = 5;
  level: number = 1;
  experience: number = 0;
  experienceToNext: number = 100;
  health: number;
  mana: number;
  items: Item[] = [itemsLibrary.healthPotion, itemsLibrary.manaPotion];
  abilities = [];

  attack;

  useItem(myItem: Item, index: number){
    console.log(myItem.useItem(this));
    this.items.splice(index, 1);
  }

  levelUp = function(){
    console.log(`${this.name} leveled up!`);

    this.health = Math.floor(this.health*1.2);
    this.maxHealth =Math.floor(this.maxhealth*1.2);
    this.mana =Math.floor(this.mana*1.2);
    this.maxMana =Math.floor(this.maxMana*1.2);
    this.defense =Math.floor(this.defense*1.2);
    this.strength =Math.floor(this.strength*1.2);
    this.intelligence =Math.floor(this.intelligence*1.2);
    this.dexterity =Math.floor(this.dexterity*1.2);

    switch (this.level){
      case 1:
        this.experienceToNext = 300;
        break;
      case 2:
        this.experienceToNext = 600;
        break;
      case 3:
        this.experienceToNext = 1000;
        break;
      case 4:
        this.experienceToNext = 1500;
        break;
      case 5:
        this.experienceToNext = 2100;
        break;
    }
    this.level += 1; 
  }
}

export let characterFactory = {
  createCharacter: function(name: string, characterClass: string){
    return this.classLibrary[characterClass](name);
  },

  classLibrary: {
    mage: function(name: string){
      return new Character(name, 'Mage', 50, 100, 4, 3, 10, 6, 5, 'strength', '-900px -1400px', 'magicMissile', 'heal', 'fireball');
    },
    warrior: function(name: string){
      return new Character(name, 'Warrior', 100, 50, 8, 10, 2, 6, 5, 'strength', '-800px -1500px', 'heal', 'doubleAttack' );
    },
    rogue: function(name: string){
      return new Character(name, 'Rogue', 75, 75, 4, 6, 6, 10, 5, 'dexterity', '-1000px -1500px', 'heal', 'throwingKnife');
    },
    archer: function(name: string){
      return new Character(name, 'Archer', 75, 75, 4, 6, 6, 10, 5, 'dexterity', '-1100px -1500px', 'heal', 'magicArrow' );
    }
  }
}
