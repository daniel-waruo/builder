import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import wrapper from '../store';
import DashboardLayout from '../layouts/DashboardLayout';
import '../styles/app.css';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <DashboardLayout>
    <Component {...pageProps} />
  </DashboardLayout>
);

export default wrapper.withRedux(
  dynamic(() => Promise.resolve(App), { ssr: false }),
);
