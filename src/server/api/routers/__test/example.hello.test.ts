import { test, expect } from '@jest/globals';
import { type AppRouter, appRouter } from '../../root';
import { prisma } from '../../../db';
import type { inferProcedureInput } from '@trpc/server';

test('hello test', async (): Promise<void> => {
  const caller = appRouter.createCaller({ session: null, prisma: prisma });
  type Input = inferProcedureInput<AppRouter['example']['hello']>;
  const input: Input = {
    text: 'test',
  };
  const result = await caller.example.hello(input);
  expect(result).toStrictEqual({ greeting: 'Hello test' });
});
