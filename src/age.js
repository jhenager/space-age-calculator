export class Age {
  constructor (earthAge, lifeExpectancy, mercuryAge, venusAge, marsAge, jupiterAge) {
  this.earthAge = earthAge;
  this.lifeExpectancy = lifeExpectancy;
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
};
