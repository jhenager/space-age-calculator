export class Age {
  constructor (earthAge, lifeExpectancy) {
  this.earthAge = earthAge;
  this.lifeExpectancy = lifeExpectancy;
  this.yearsLeftEarth;
  this.yearsLeftMercury;
  this.yearsLeftVenus;
  this.yearsLeftMars;
  this.yearsLeftJupiter;
  this.mercuryAge;
  this.venusAge;
  this.marsAge;
  this.jupiterAge;
  }

  mercuryCalc() {
    this.mercuryAge = parseInt(this.earthAge/.24);
  }

  venusCalc() {
    this.venusAge = parseInt(this.earthAge/.62);
  }

  marsCalc() {
    this.marsAge = parseInt(this.earthAge/1.88);
  }

  jupiterCalc() {
    this.jupiterAge = parseInt(this.earthAge/11.86);
  }

  yearsLeftEarthCalc () {
    if (this.earthAge>this.lifeExpectancy) {
      this.yearsLeftEarth = parseInt(this.earthAge-this.lifeExpectancy)
    } else {
      this.yearsLeftEarth = parseInt(this.lifeExpectancy - this.earthAge)
    }
  }

  yearsLeftMercuryCalc () {
    if (this.mercuryAge>this.lifeExpectancy/.24) {
      this.yearsLeftMercury = "You are " + parseInt(this.mercuryAge-this.lifeExpectancy/.24) + " years older than the life expectancy!"
    } else {
      this.yearsLeftMercury = parseInt((this.lifeExpectancy/.24)-this.mercuryAge);
    }
  }

  yearsLeftVenusCalc () {
    if (this.venusAge>this.lifeExpectancy/.62) {
      this.yearsLeftVenus = "You are " + parseInt(this.venusAge-this.lifeExpectancy/.62) + " years older than the life expectancy!"
    } else {
      this.yearsLeftVenus = parseInt((this.lifeExpectancy/.62)-this.venusAge)
    }
  }

  yearsLeftMarsCalc () {
    if (this.marsAge>this.lifeExpectancy/1.88) {
      this.yearsLeftMars = "You are " + parseInt(this.marsAge-this.lifeExpectancy/1.88) + " years older than the life expectancy!"
    } else {
      this.yearsLeftMars = parseInt((this.lifeExpectancy/1.88)-this.marsAge)
    }
  }

  yearsLeftJupiterCalc () {
    if (this.jupiterAge>this.lifeExpectancy/11.86) {
      this.yearsLeftJupiter = "You are " + parseInt(this.jupiterAge-this.lifeExpectancy/11.86) + " years older than the life expectancy!"
    } else {
      this.yearsLeftJupiter = parseInt((this.lifeExpectancy/11.86)-this.jupiterAge);
    }
  }
};