
import { Age } from './../src/age.js';
import { TestScheduler } from 'jest';

describe('Age', () => {
  let james;


  beforeEach(() => {
    james = new Age(28, 80);
  });

  test('The program should allow a user to input their age', () => {
    expect(james.earthAge).toBe(28);
  }); 

  test ('The program should be able to convert the users age into Mercury years.', () => {
    james.mercuryCalc(james.earthAge);
    expect(james.mercuryAge).toBe(116);
  })

  test ('The program should be able to convert the users age into Venus years', () => {
    james.venusCalc(james.earthAge);
    expect(james.venusAge).toBe(45);
  })

  test ('The program should be able to convert the users age into Mars years', () => {
    james.marsCalc(james.earthAge);
    expect(james.marsAge).toBe(14);
  })

  test ('The program should be able to convert the users age into Jupiter years', () => {
    james.jupiterCalc(james.earthAge);
    expect(james.jupiterAge).toBe(2);
  })

  test ('The program should allow the user to enter their life expectancy.', () => {
    expect(james.lifeExpectancy).toBe(80);
  })

  test('The program should determine how many years left they have to live on Earth.', () => {
    james.yearsLeftEarthCalc(james.earthAge);
    expect(james.yearsLeftEarth).toBe(52)
  })

  test('The program should determine how many years left they have to live on Mercury.', () => {
    expect(james.yearsLeftMercury).toBe(217)
  })
})