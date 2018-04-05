import { Character } from './characters';
import { Item } from './items';
import { abilitiesLibrary } from './abilities';


export class Monster {
  constructor(public name: string, public maxHealth: number, public maxMana: number, public defense: number, public strength: number, public intelligence: number, public dexterity: number, public luck: number, attackAttribute, public killExperience: number, public imgPath: string, ...abilities){
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
  key; 

  attack;
}

export let monsterLevelKey = {
  1: ['bat'],
  2: ['zombie'],
  3: ['skeleton'],
  4: ['ghoul']
}

export let monsterFactory = {
  createMonster: function(name: string){
    return this.monsterLibrary[name]();
  },

  monsterLibrary: {
    bat: function(){
      return new Monster('Bat', 25, 50, 4, 3, 10, 6, 5, 'strength', 20, '-400px -900px'  );
    },
    zombie: function(){
      return new Monster('Zombie', 50, 50, 8, 5, 2, 6, 5, 'strength', 40, '-400px -1000px' );
    },
    skeleton: function(){
      return new Monster('Skeleton', 100, 50, 4, 10, 6, 10, 5, 'strength', 75, "-100px -900px" );
    },
    ghoul: function(){
      return new Monster('Ghoul', 150, 50, 4, 6, 16, 10, 5, 'strength', 100, '-500px -900px' );
    }
  }
}
