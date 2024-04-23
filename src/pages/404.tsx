import React from 'react';
import { useRouter } from 'next/router';

import { BasicLayout } from '@/layouts/BasicLayout';
import { NextPageWithLayout } from '@/types/pages';
import Image from 'next/image';
import style from '../style/404.module.scss';
import { Container } from '@/components/Container';
import Button from '@mui/material/Button';
import { notFound } from '@/images';

const Custom404: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <Container>
      <div className={style['error']}>
        <strong className={style['error__title']}>
          Die gewünschte Seite konnte leider nicht gefunden werden.
        </strong>
        <p className={style['error__text']}>
          Jetzt eine Alternative suchen oder mit dem Preisvergleich auf unserer
          Startseite loslegen!
        </p>
        <Image
          className={style['error__image']}
          src={notFound}
          alt={'404'}
          width={278}
          height={205}
          unoptimized={true}
        />
        <Button
          type="submit"
          size="large"
          style={{
            backgroundColor: '#fb761f',
            borderRadius: '25px',
            width: '300px',
            textTransform: 'inherit',
            marginTop: 20,
          }}
          variant="contained"
          onClick={() => {
            router.push('/');
          }}
        >
          Bewertung absenden
        </Button>
      </div>
    </Container>
  );
};

Custom404.getLayout = BasicLayout;
export default Custom404;
