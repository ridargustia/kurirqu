// import '@/styles/globals.css'
import AppShell from '@/views/containers/organisms/AppShell';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </SessionProvider>
  );
}
