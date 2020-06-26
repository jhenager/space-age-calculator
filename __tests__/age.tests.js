
import { Age } from './../src/age.js';
import { TestScheduler } from 'jest';

describe('Age', () => {
  let james;
  let nana;


  beforeEach(() => {
    james = new Age(28, 80);
    nana = new Age (100, 80)
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
    expect(james.yearsLeftEarth).toBe(52);
  })

  test('The program should determine how many years left they have to live on Mercury.', () => {
    james.mercuryCalc(james.earthAge);
    james.yearsLeftMercuryCalc(james.lifeExpectancy);
    expect(james.yearsLeftMercury).toBe(217);
  })

  test('The program should determine how many years left they have to live on Venus.', () => {
    james.venusCalc(james.earthAge);
    james.yearsLeftVenusCalc(james.lifeExpectancy);
    expect(james.yearsLeftVenus).toBe(84);
  })

  test('The program should determine how many years left they have to live on Mars.', () => {
    james.marsCalc(james.earthAge);
    james.yearsLeftMarsCalc(james.lifeExpectancy);
    expect(james.yearsLeftMars).toBe(28);
  })

  test('The program should determine how many years left they have to live on Jupiter.', () => {
    james.jupiterCalc(james.earthAge);
    james.yearsLeftJupiterCalc(james.lifeExpectancy);
    expect(james.yearsLeftJupiter).toBe(4);
  })

  test('The program should determine if a user is already older than the expected life expectancy (Earth) and calculate how many years past the life expectancy theyve lived.', () => {
    nana.yearsLeftEarthCalc(nana.earthAge);
    expect(nana.yearsLeftEarth).toBe(20);
  })

  test('The program should determine if a user is already older than the expected life expectancy (Mercury) and calculate how many years past the life expectancy theyve lived.', () => {
    nana.mercuryCalc(nana.earthAge)
    nana.yearsLeftMercuryCalc(nana.lifeExpectancy);
    expect(nana.yearsLeftMercury).toBe("You are 82 years older than the life expectancy!");
  })

  test('The program should determine if a user is already older than the expected life expectancy (Venus) and calculate how many years past the life expectancy theyve lived.', () => {
    nana.venusCalc(nana.earthAge)
    nana.yearsLeftVenusCalc(nana.lifeExpectancy);
    expect(nana.yearsLeftVenus).toBe("You are 31 years older than the life expectancy!");
  })
  
  test('The program should determine if a user is already older than the expected life expectancy (Mars) and calculate how many years past the life expectancy theyve lived.', () => {
    nana.marsCalc(nana.earthAge)
    nana.yearsLeftMarsCalc(nana.lifeExpectancy);
    expect(nana.yearsLeftMars).toBe("You are 10 years older than the life expectancy!");
  })

  test('The program should determine if a user is already older than the expected life expectancy (Jupiter) and calculate how many years past the life expectancy theyve lived.', () => {
    nana.jupiterCalc(nana.earthAge)
    nana.yearsLeftJupiterCalc(nana.lifeExpectancy);
    expect(nana.yearsLeftJupiter).toBe("You are 1 years older than the life expectancy!");
  })
});

