import { test, expect } from '@jest/globals';
import myFunction from './example';

test('Check ENV test', () => {
  const result = myFunction();
  expect(result).toBe('hifromtest');
});
