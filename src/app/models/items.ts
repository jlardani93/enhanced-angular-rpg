export class Character {
  constructor(public name: string, public characterClass: string, public experience: number, public maxHealth: number, public maxMana: number, public defense: number, public strength: number, public intelligence: number, public dexterity: number, public luck: number, attackString: string, ...abilities){
    this.health = this.maxHealth;
    this.mana = this.maxMana;
    this.attack = (()=>{
      return function(monster: Monster, attackAttribute){
        monster.health -= this[attackAttribute];
        return `${this.name} attacked ${monster.name} for ${this.attackAttribute} health.`
      }
    })();
  }

  level: number = 1;
  experienceToNext: number = 100;
  health: number;
  mana: number;
  items: Item[];

  attack;
}

export let characterFactory = {
  createCharacter: function(name: string, characterClass: string){
    return this.classLibrary[characterClass](name);
  },

  classLibrary: {
    mage: function(name: string){
      return new Character(name, 'Mage', )
    }
  }
}
