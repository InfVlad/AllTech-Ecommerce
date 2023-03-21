import { it, expect } from 'vitest';
import { suma, product, resta } from './bigmath';

it('suma', () => {
  const resultado = suma(1, 2);
  expect(resultado).toBe(3);
});
it('product', () => {
  const resultado = product(3, 2);
  expect(resultado).toBe(6);
});
it('resta', () => {
  const resultado = resta(5, 2);
  expect(resultado).toBe(3);
});
