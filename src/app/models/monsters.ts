import { Character } from './characters';
import { Item } from './items';
import { abilitiesLibrary } from './abilities';


export class Monster {
  constructor(public name: string, public maxHealth: number, public maxMana: number, public defense: number, public strength: number, public intelligence: number, public dexterity: number, public luck: number, attackAttribute, ...abilities){
    this.health = this.maxHealth;
    this.mana = this.maxMana;
    this.attack = (()=>{
      return function(character: Character){
        character.health -= this[attackAttribute];
        return `${this.name} attacked ${character.name} for ${this[attackAttribute]} health.`
      }
    })();
  }

  level: number = 1;
  experience: number = 0;
  experienceToNext: number = 100;
  health: number;
  mana: number;
  items: Item[] = [];
  abilities: object[] = [];

  attack;
}

export let monsterFactory = {
  createMonster: function(name: string){
    return this.monsterLibrary[name]();
  },

  classLibrary: {
    creep: function(){
      return new Monster('Creep', 50, 100, 4, 3, 10, 6, 5, 'strength',  );
    },
    zombie: function(){
      return new Monster('Zombie', 100, 50, 8, 10, 2, 6, 5, 'strength', );
    },
    skeleton: function(){
      return new Monster('Skeleton', 75, 75, 4, 6, 6, 10, 5, 'dexterity', );
    },
    ghoul: function(){
      return new Monster('Ghoul', 75, 75, 4, 6, 6, 10, 5, 'dexterity', );
    }
  }
}
