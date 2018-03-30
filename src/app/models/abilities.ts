export let abilitiesLibrary = {
  magicMissile: {
    name: "Magic Missile",
    mana: 5,
    cast: (caster, target, duration) => {
      caster.mana -= this.mana;
      target.health -= caster.intelligence;
      return `${caster.name} cast ${this.name} on ${target.name} for ${caster.intelligence} damage`;
    }
  },
  throwingKnife: {
    name: "Throwing Knife",
    mana: 15,
    cast: (caster, target) => {
      caster.mana -= this.mana;
      target.health -= caster.dexterity;
      return `${caster.name} cast ${this.name} on ${target.name} for ${caster.intelligence} damage`;
    }
  },
  heal: {
    name: "Heal",
    mana: 20,
    cast: (caster, target) => {
      caster.mana -= this.mana;
      target.health += caster.intelligence*2;
      return `${caster.name} cast ${this.name} on ${target.name} to increase health by ${caster.intelligence}`;
    }
  },
  doubleAttack: {
    name: "Double Attack",
    mana: 15,
    cast: (caster, target) => {
      caster.mana -= this.mana;
      target.health -= caster.strength*2;
      return `${caster.name} cast ${this.name} on ${target.name} for ${caster.intelligence} damage`;
    }
  },
  fireball: {
    name: "Fireball",
    mana: 15,
    cast: (caster, target) => {
      caster.mana -= this.mana;
      target.health -= caster.intelligence*2;
      return `${caster.name} cast ${this.name} on ${target.name} for ${caster.intelligence} damage`;
    }
  },
  magicArrow: {
    name: "Magic Arrow",
    mana: 15,
    cast: (caster, target) => {
      caster.mana -= this.mana;
      target.health -= caster.dexterity*2;
      return `${caster.name} cast ${this.name} on ${target.name} for ${caster.intelligence} damage`;
    }
  }
}
