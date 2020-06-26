
import { Age } from './../src/age.js';
import { TestScheduler } from 'jest';

describe('Age', () => {
  let james;


  beforeEach(() => {
    james = new Age(28);
  });

  test('The program should allow a user to input their age', () => {
    expect(james.earthAge).toBe(28);
  }); 

  test ('The program should be able to convert the users age into Mercury years.', () => {
    james.mercuryCalc(james.earthAge);
    expect(james.mercuryAge).toBe(116);
  })
})