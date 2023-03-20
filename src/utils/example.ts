import { env } from '~/env.mjs';

const myFunction = () => {
  return env.NEXT_PUBLIC_SOMETHING;
};

export default myFunction;
