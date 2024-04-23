import Document, { Head, Html, Main, NextScript } from 'next/document';
import React, { ReactElement } from 'react';

export default class CustomDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang={'de'}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Cache-Control" content="max-age=31536000" />
          <meta name="theme-color" content="#000000" />
          <link
            rel="icon"
            type="image/x-icon"
            href="https://scontent.flwo7-1.fna.fbcdn.net/v/t39.30808-6/335634831_173963768739680_8686522340745772710_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=c7JoCG6ZQC0Ab7V4yrt&_nc_ht=scontent.flwo7-1.fna&oh=00_AfDCo1EwkCX5LUAmVwg8oz0xuBGY8mDtRVahveJzEPp1Pw&oe=662D826E"
          />
          <link
            rel="apple-touch-icon"
            href="https://scontent.flwo7-1.fna.fbcdn.net/v/t39.30808-6/335634831_173963768739680_8686522340745772710_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=c7JoCG6ZQC0Ab7V4yrt&_nc_ht=scontent.flwo7-1.fna&oh=00_AfDCo1EwkCX5LUAmVwg8oz0xuBGY8mDtRVahveJzEPp1Pw&oe=662D826E"
          />
        </Head>
        <body id="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
