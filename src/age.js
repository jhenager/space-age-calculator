export class Age {
  constructor (earthAge, mercuryAge, venusAge) {
  this.earthAge = earthAge;
  this.mercuryAge = mercuryAge;
  this.venusAge = venusAge;
  }

mercuryCalc(age) {
  this.mercuryAge = age/.24;

}

};
