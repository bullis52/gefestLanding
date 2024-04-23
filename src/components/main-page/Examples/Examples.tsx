import React, { useEffect, useState } from 'react';
import { Container } from '@/components/Container';
import 'swiper/css';
import 'swiper/css/navigation';
import Cookies from 'js-cookie';

import style from '../../../style/main/main.module.scss';
import {
  example1,
  example10,
  example11,
  example12,
  example13,
  example14,
  example15,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8,
  example9,
} from '@/images';
import Image from 'next/image';

const examples = [
  { image: example1 },
  { image: example2 },
  { image: example3 },
  { image: example4 },
  { image: example5 },
  { image: example6 },
  { image: example7 },
  { image: example8 },
  { image: example9 },
  { image: example10 },
  { image: example11 },
  { image: example12 },
  { image: example13 },
  { image: example14 },
  { image: example15 },
];

export const Examples = () => {
  const [, setShowCookieModal] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const [cookiePermissions, setCookiePermissions] = useState({
    necessary: Cookies.get('necessaryCookies') === 'true',
    externalMedia: Cookies.get('externalMediaCookies') === 'true',
    legitimateInterest: Cookies.get('legitimateInterestCookies') === 'true',
    googleAdsense: Cookies.get('googleAdsenseCookies') === 'true',
  });

  const updateCookiePermissions = (type: string, value: boolean) => {
    setCookiePermissions((prevPermissions) => ({
      ...prevPermissions,
      [type]: value,
    }));
    Cookies.set(type + 'Cookies', value.toString(), { expires: 365 });
  };

  useEffect(() => {
    updateCookiePermissions('necessary', true);
    updateCookiePermissions('externalMedia', true);
    updateCookiePermissions('legitimateInterest', true);
    updateCookiePermissions('googleAdsense', true);
  }, []);

  useEffect(() => {
    if (
      cookiePermissions.externalMedia &&
      cookiePermissions.necessary &&
      cookiePermissions.googleAdsense &&
      cookiePermissions.legitimateInterest
    ) {
      setShowCookieModal(false);
    } else {
      setShowCookieModal(true);
    }
  }, []);

  return (
    <div className={style.main}>
      <Container>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {examples
            .filter((_, index) => showAll || index < 6)
            .map((value) => (
              <div style={{ padding: 10 }} key={value.image}>
                <Image
                  src={value.image}
                  alt={'Приклад'}
                  width={330}
                  height={200}
                />
              </div>
            ))}
        </div>
        <div style={{ margin: '0 auto' }}>
          <button
            style={{
              width: 200,
              height: 50,
              background: 'none',
              border: 'none',
              backgroundColor: '#043e54',
              fontSize: 20,
              color: '#fff',
              marginBottom: 100,
              cursor: 'pointer',
            }}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Сховати' : 'Показати Більше'}
          </button>
        </div>
      </Container>
    </div>
  );
};
