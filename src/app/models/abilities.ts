export let abilitiesLibrary = {
  magicMissile: {
    name: "Magic Missile",
    mana: 5,
    cast: function(caster, target) {
      if (caster.mana >= this.mana) {
        caster.mana -= this.mana;
        target.health -= caster.intelligence;
        return `${caster.name} cast ${this.name} on ${target.name} for ${caster.intelligence} damage`;
      } else { return `Caster mana insufficient to cast this ability`}
    }
  },
  throwingKnife: {
    name: "Throwing Knife",
    mana: 15,
    cast: function(caster, target) {
      if (caster.mana >= this.mana) {
        caster.mana -= this.mana;
        target.health -= caster.dexterity*2;
        return `${caster.name} cast ${this.name} on ${target.name} for ${caster.intelligence} damage`;
      } else { return `Caster mana insufficient to cast this ability`}
    }
  },
  heal: {
    name: "Heal",
    mana: 20,
    cast: function(caster, target) {
      if (caster.mana >= this.mana) {
        caster.mana -= this.mana;
        caster.health += caster.intelligence*2;
        return `${caster.name} cast ${this.name} on ${caster.name} to increase health by ${caster.intelligence*2}`;
      } else { return `Caster mana insufficient to cast this ability`}
    }
  },
  doubleAttack: {
    name: "Double Attack",
    mana: 15,
    cast: function(caster, target) {
      if (caster.mana >= this.mana) {
        caster.mana -= this.mana;
        target.health -= caster.strength*2;
        return `${caster.name} cast ${this.name} on ${target.name} for ${caster.strength*2} damage`;
      } else { return `Caster mana insufficient to cast this ability`}
    }
  },
  fireball: {
    name: "Fireball",
    mana: 15,
    cast: function(caster, target) {
      if (caster.mana >= this.mana) {
        caster.mana -= this.mana;
        target.health -= caster.intelligence*2;
        return `${caster.name} cast ${this.name} on ${target.name} for ${caster.intelligence*2} damage`;
      } else { return `Caster mana insufficient to cast this ability`}
    }
  },
  magicArrow: {
    name: "Magic Arrow",
    mana: 15,
    cast: function(caster, target) {
      if (caster.mana >= this.mana) {
        caster.mana -= this.mana;
        target.health -= caster.dexterity*2;
        return `${caster.name} cast ${this.name} on ${target.name} for ${caster.dexterity*2} damage`;
      } else { return `Caster mana insufficient to cast this ability`}
    }
  }
}
