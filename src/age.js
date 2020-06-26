export class Age {
  constructor (earthAge, lifeExpectancy, yearsLeftEarth, yearsLeftMercury, yearsLeftVenus, yearsLeftMars, yearsLeftJupiter, mercuryAge, venusAge, marsAge, jupiterAge) {
  this.earthAge = earthAge;
  this.lifeExpectancy = lifeExpectancy;
  this.yearsLeftEarth = yearsLeftEarth;
  this.yearsLeftMercury = yearsLeftMercury;
  this.yearsLeftVenus = yearsLeftVenus;
  this.yearsLeftMars = yearsLeftMars;
  this.yearsLeftJupiter = yearsLeftJupiter;
  this.mercuryAge = mercuryAge;
  this.venusAge = venusAge;
  this.marsAge = marsAge;
  this.jupiterAge = jupiterAge;
  
  }

  mercuryCalc(age) {
    this.mercuryAge = parseInt(age/.24);
  }

  venusCalc(age) {
    this.venusAge = parseInt(age/.62);
  }

  marsCalc(age) {
    this.marsAge = parseInt(age/1.88);
  }

  jupiterCalc(age) {
    this.jupiterAge = parseInt(age/11.86);
  }

  yearsLeftEarthCalc (age) {
    if (age>this.lifeExpectancy) {
      this.yearsLeftEarth = parseInt(age-this.lifeExpectancy)
    } else {
      this.yearsLeftEarth = parseInt(this.lifeExpectancy - age)
    }
  }

  yearsLeftMercuryCalc (lifeExpectancy) {
    if (this.mercuryAge>lifeExpectancy/.24) {
      this.yearsLeftMercury = "You are " + parseInt(this.mercuryAge-lifeExpectancy/.24) + " years older than the life expectancy!"
    } else {
      this.yearsLeftMercury = parseInt((lifeExpectancy/.24)-this.mercuryAge);
    }
  }

  yearsLeftVenusCalc (lifeExpectancy) {
    if (this.venusAge>lifeExpectancy/.62) {
      this.yearsLeftVenus = "You are " + parseInt(this.venusAge-lifeExpectancy/.62) + " years older than the life expectancy!"
    } else {
      this.yearsLeftVenus = parseInt((lifeExpectancy/.62)-this.venusAge)
    }
  }

  yearsLeftMarsCalc (lifeExpectancy) {
    if (this.marsAge>lifeExpectancy/1.88) {
      this.yearsLeftMars = "You are " + parseInt(this.marsAge-lifeExpectancy/1.88) + " years older than the life expectancy!"
    } else {
      this.yearsLeftMars = parseInt((lifeExpectancy/1.88)-this.marsAge)
    }
  }

  yearsLeftJupiterCalc (lifeExpectancy) {
    this.yearsLeftJupiter = parseInt((lifeExpectancy/11.86)-this.jupiterAge);
  }
};
