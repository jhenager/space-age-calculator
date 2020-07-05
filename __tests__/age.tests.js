
import { Age } from './../src/age.js';

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
    james.mercuryCalc();
    expect(james.mercuryAge).toBe(116);
  })

  test ('The program should be able to convert the users age into Venus years', () => {
    james.venusCalc();
    expect(james.venusAge).toBe(45);
  })

  test ('The program should be able to convert the users age into Mars years', () => {
    james.marsCalc();
    expect(james.marsAge).toBe(14);
  })

  test ('The program should be able to convert the users age into Jupiter years', () => {
    james.jupiterCalc();
    expect(james.jupiterAge).toBe(2);
  })

  test ('The program should allow the user to enter their life expectancy.', () => {
    expect(james.lifeExpectancy).toBe(80);
  })

  test('The program should determine how many years left they have to live on Earth.', () => {
    james.yearsLeftEarthCalc();
    expect(james.yearsLeftEarth).toBe(52);
  })

  test('The program should determine how many years left they have to live on Mercury.', () => {
    james.mercuryCalc();
    james.yearsLeftMercuryCalc();
    expect(james.yearsLeftMercury).toBe(217);
  })

  test('The program should determine how many years left they have to live on Venus.', () => {
    james.venusCalc();
    james.yearsLeftVenusCalc();
    expect(james.yearsLeftVenus).toBe(84);
  })

  test('The program should determine how many years left they have to live on Mars.', () => {
    james.marsCalc();
    james.yearsLeftMarsCalc();
    expect(james.yearsLeftMars).toBe(28);
  })

  test('The program should determine how many years left they have to live on Jupiter.', () => {
    james.jupiterCalc();
    james.yearsLeftJupiterCalc();
    expect(james.yearsLeftJupiter).toBe(4);
  })

  test('The program should determine if a user is already older than the expected life expectancy (Earth) and calculate how many years past the life expectancy theyve lived.', () => {
    nana.yearsLeftEarthCalc();
    expect(nana.yearsLeftEarth).toBe(20);
  })

  test('The program should determine if a user is already older than the expected life expectancy (Mercury) and calculate how many years past the life expectancy theyve lived.', () => {
    nana.mercuryCalc()
    nana.yearsLeftMercuryCalc();
    expect(nana.yearsLeftMercury).toBe("You are 82 years older than the life expectancy!");
  })

  test('The program should determine if a user is already older than the expected life expectancy (Venus) and calculate how many years past the life expectancy theyve lived.', () => {
    nana.venusCalc()
    nana.yearsLeftVenusCalc();
    expect(nana.yearsLeftVenus).toBe("You are 31 years older than the life expectancy!");
  })
  
  test('The program should determine if a user is already older than the expected life expectancy (Mars) and calculate how many years past the life expectancy theyve lived.', () => {
    nana.marsCalc()
    nana.yearsLeftMarsCalc();
    expect(nana.yearsLeftMars).toBe("You are 10 years older than the life expectancy!");
  })

  test('The program should determine if a user is already older than the expected life expectancy (Jupiter) and calculate how many years past the life expectancy theyve lived.', () => {
    nana.jupiterCalc()
    nana.yearsLeftJupiterCalc();
    expect(nana.yearsLeftJupiter).toBe("You are 1 years older than the life expectancy!");
  })
});