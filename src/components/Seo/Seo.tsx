import Head from 'next/head';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function Seo({ title, description, image }) {
  return (
    title &&
    description && (
      <Head>
        <title key="title">{`${title}`}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Head>
    )
  );
}
