class Animals {
  constructor(name, ages) {
    this.name = name;
    this.ages = ages;
  }
  eat() {
    return `This ${this.name} is eatting Now!!!`;
  }
}
class Cats extends Animals {
  drink() {
    const { name, age } = this;
    return `Did you know that My Cat called ${name} has Now ${age} ages`;
  }
}

class Dogs extends Animals {
  constructor(name, ages, lifeLeft = 9) {
    super(name, ages);
    this.lifeLeft = lifeLeft;
  }
  drink() {
    const { name, ages } = this;
    console.log("My Dogs Ages is", ages);
    if (ages > 0) {
      if (ages < 20) {
        return `this ${name} iramoka kandi iracyari ntoya kuko ifite imyaka  ${ages} ubuzima bwayo ni ${this.lifeLeft}`;
      } else {
        return `this ${name} ntabukana igifite kuko ifte imyaka ${ages} urumva ko rero irengeje imya 20 ubuzima bwayo ni ${this.lifeLeft}`;
      }
    } else {
      return `Imyaka ${ages} mwashyizemo kumbwa yitwa ${name} ntibaho mwongere mugerageze`;
    }
  }
}
const pussy = new Cats("pussy", 40);
const myDogDady = new Dogs("DogDady", 11, 6);
