/**
 * @format
 */

import 'react-native';
import { shuffleWord, calculatePoints } from '../src/screens/Wordify';

// We can write so many test cases to 
// * verify UI elements
// * mock network fetch data to check fetching logic
// * and more game logic.

describe('shuffleLetters', () => {
  test('shuffles the letters in a word', () => {
    const word = 'apple';
    const shuffled = shuffleWord(word);
    expect(shuffled).not.toBe(word);
    expect(shuffled.split('').sort().join('')).toBe(word.split('').sort().join(''));
  });

  test('returns an empty string for an empty word', () => {
    const word = '';
    const shuffled = shuffleWord(word);
    expect(shuffled).toBe('');
  });
});

describe('calculatePoints', () => {
  test('calculates the points for a word based on its length', () => {
    const word = 'Tiger';
    const points = calculatePoints(word, 5);
    expect(points).toBe(50);
  });

  test('calculates extra points for longer words', () => {
    const word = 'Elephant';
    const points = calculatePoints(word, 3);
    expect(points).toBe(75);
  });

  test('calculates extra points for more complex words', () => {
    const word = 'Sushi';
    const points = calculatePoints(word, 8);
    expect(points).toBe(53);
  });

  test('returns 0 points for an empty word', () => {
    const word = '';
    const points = calculatePoints(word, 0);
    expect(points).toBe(0);
  });
});
