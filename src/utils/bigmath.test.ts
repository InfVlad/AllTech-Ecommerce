import { test, expect } from '@jest/globals';
import { suma, product, resta } from './bigmath';

test('suma', () => {
  const resultado = suma(1, 2);
  expect(resultado).toBe(3);
});
test('product', () => {
  const resultado = product(3, 2);
  expect(resultado).toBe(6);
});
test('resta', () => {
  const resultado = resta(5, 2);
  expect(resultado).toBe(3);
});
