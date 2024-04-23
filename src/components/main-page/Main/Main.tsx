import React from 'react';
import { Container } from '@/components/Container';
import { Banner } from '@/components/categories-page/Banner/Banner';
import { useScreenDimensions } from '@/hooks/screenDimensions';

import style from '../../../style/main/main.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { AboutUs } from '@/components/main-page/AboutUs/AboutUs';

export const Main = () => {
  const { width } = useScreenDimensions();

  return (
    <div className={style.main}>
      <Container>
        {width > 1000 && <Banner />}

        <AboutUs />
      </Container>
    </div>
  );
};
