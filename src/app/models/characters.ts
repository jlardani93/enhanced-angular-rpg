import { Item, itemsLibrary } from './items';
import { Monster } from './monsters';
import { abilitiesLibrary } from './abilities';

export class Character {
  constructor(public name: string, public characterClass: string, public maxHealth: number, public maxMana: number, public defense: number, public strength: number, public intelligence: number, public dexterity: number, public luck: number, public imgPath: string, attackAttribute,  ...abilities: string[]){
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

  level: number = 1;
  experience: number = 0;
  experienceToNext: number = 100;
  health: number;
  mana: number;
  items: Item[] = [itemsLibrary.healthPotion, itemsLibrary.manaPotion];
  abilities = [];

  attack;
}

export let characterFactory = {
  createCharacter: function(name: string, characterClass: string){
    return this.classLibrary[characterClass](name);
  },

  classLibrary: {
    mage: function(name: string){
      return new Character(name, 'Mage', 50, 100, 4, 3, 10, 6, 5, 'strength', './assets/img/spritesheet.png', 'magicMissle', 'heal', 'fireball');
    },
    warrior: function(name: string){
      return new Character(name, 'Warrior', 100, 50, 8, 10, 2, 6, 5, 'strength', './assets/img/spritesheet.png', 'heal', 'doubleAttack' );
    },
    rogue: function(name: string){
      return new Character(name, 'Rogue', 75, 75, 4, 6, 6, 10, 5, 'dexterity', './assets/img/spritesheet.png', 'heal', 'throwingKnife');
    },
    archer: function(name: string){
      return new Character(name, 'Archer', 75, 75, 4, 6, 6, 10, 5, 'dexterity', './assets/img/spritesheet.png', 'heal', 'magicArrow' );
    }
  }
}
