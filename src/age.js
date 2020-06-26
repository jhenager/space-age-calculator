export class Age {
  constructor (earthAge, mercuryAge, venusAge) {
  this.earthAge = earthAge;
  this.mercuryAge = mercuryAge;
  this.venusAge = venusAge;
  }

  mercuryCalc(age) {
    this.mercuryAge = parseInt(age/.24);
  }

  venusCalc(age) {
    this.venusAge = parseInt(age/.62);
  }
};
