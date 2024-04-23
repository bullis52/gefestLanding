import React from 'react';
import Head from 'next/head';

import { AppPropsWithLayout } from '@/types/pages';

import '../style/globals.scss';

function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  const { asPath } = router;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {asPath.includes('result') ? (
        <>{getLayout(<Component {...pageProps} />)}</>
      ) : (
        getLayout(<Component {...pageProps} />)
      )}
    </>
  );
}

export default MyApp;
