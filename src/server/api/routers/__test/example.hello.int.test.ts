import type { inferProcedureInput } from '@trpc/server';
import { test, expect } from '@jest/globals';
import { prisma } from '../../../db';
import { type AppRouter, appRouter } from '../../root';

test('hello test', async (): Promise<void> => {
  const caller = appRouter.createCaller({ session: null, prisma });
  type Input = inferProcedureInput<AppRouter['example']['hello']>;
  const input: Input = {
    text: 'test',
  };
  const result = await caller.example.hello(input);
  console.log('hello from int');
  expect(result).toStrictEqual({ greeting: 'Hello test' });
});
