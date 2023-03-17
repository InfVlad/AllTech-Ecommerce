import React from 'react';
import type { AppType } from 'next/app';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { api } from '~/utils/api';

import '~/styles/globals.css';
import type { NextComponentType } from 'next';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: NextComponentType;
  pageProps: { session: Session | null };
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
