import type { inferProcedureInput } from '@trpc/server';
import { it, expect } from 'vitest';
import { prisma } from '../../../db';
import { type AppRouter, appRouter } from '../../root';

it('hello test', async (): Promise<void> => {
  const caller = appRouter.createCaller({ session: null, prisma });
  type Input = inferProcedureInput<AppRouter['example']['hello']>;
  const input: Input = {
    text: 'test',
  };
  const result = await caller.example.hello(input);
  console.log('hello from int');
  expect(result).toStrictEqual({ greeting: 'Hello test' });
});
