import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import {
  ButtonNext,
  ButtonPrev,
} from '@/components/categories-page/Slider/NavButtons';

import style from '../../../style/banner/banner.module.scss';

export const Banner = () => {
  const arr = [
    {
      img: 'https://gefeststroi.com/static/media/IMG_20211023_181403.2811e527bd76eb33ad78.jpg',
      link: '',
    },
    {
      img: 'https://gefeststroi.com/static/media/1631894551923.22e30c12aa788678e0d7.jpg',
      link: '',
    },
    {
      img: 'https://gefeststroi.com/static/media/1634042952998.c6490036908abc9499cc.jpg',
      link: '',
    },
  ];
  return (
    <div>
      <Swiper
        className={style['slider__component']}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        modules={[Navigation]}
      >
        {arr.map((slide, index) => (
          <SwiperSlide key={slide.img + index}>
            <a
              href={slide.link}
              className={style['banner']}
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {' '}
            </a>
          </SwiperSlide>
        ))}
        <ButtonPrev />
        <ButtonNext />
      </Swiper>
    </div>
  );
};
