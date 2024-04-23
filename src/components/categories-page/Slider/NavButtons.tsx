import { useSwiper } from 'swiper/react';

import style from '../../../style/buttons.module.scss';

export const ButtonPrev = () => {
  const swiper = useSwiper();

  return (
    <div
      className={style['button__prev']}
      onClick={() => swiper.slidePrev()}
    ></div>
  );
};

export const ButtonNext = () => {
  const swiper = useSwiper();

  return (
    <div
      className={style['button__next']}
      onClick={() => swiper.slideNext()}
    ></div>
  );
};
