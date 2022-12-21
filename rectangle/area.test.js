import { area } from './area';

describe('area', () => {
  it('correctly calculates integer width and length', () => {
    expect(area(10, 10)).toBe(100);
    expect(area(4, 5)).toBe(20);
    expect(area(2, 1)).toBe(2);
  });
});
