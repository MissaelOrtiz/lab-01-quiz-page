// IMPORT MODULES under test here:
import { valHP } from './functions.js';
import { valST } from './functions.js';
import { valIT } from './functions.js';
import { valSP } from './functions.js';
import { saveStatsButton } from './functions.js';
import { displayHP } from './functions.js';
import { displayST } from './functions.js';
import { displayIT } from './functions.js';
import { displaySP } from './functions.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Takes in a number 8-10 and return the healthy heart image path.', (expect) => {
    const expected = './assets/heartfll.png';

    const actual = valHP(8);

    expect.equal(actual, expected);
});

test('Takes in a number 4-7 and return the normal heart image path.', (expect) => {
    const expected = './assets/heart.png';

    const actual = valHP(5);

    expect.equal(actual, expected);
});

test('Takes in a number 0-3 and return the broken heart image path.', (expect) => {
    const expected = './assets/heartbrk.png';

    const actual = valHP(2);

    expect.equal(actual, expected);
});