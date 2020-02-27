import { yourName } from './yourName';

describe('Write your name in the test', () => {
  test('yourName should return your name', () => {
    expect(yourName()).toBe('mahendra');
  });
});
