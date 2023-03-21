import { it, expect } from 'vitest';
import myFunction from './example';

it('Check ENV test', () => {
  const result = myFunction();
  expect(result).toBe('hifromtest');
});
