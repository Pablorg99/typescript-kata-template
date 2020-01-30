import Kata from '../src/kata';

describe('Kata', () => {
  it('should return green test', () => {
    const returnValue = new Kata().rule();

    expect(returnValue).toBe('green');
  });
});
