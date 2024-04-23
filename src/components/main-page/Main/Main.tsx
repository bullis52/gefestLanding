import React, { useEffect, useState } from 'react';
import { Container } from '@/components/Container';
import { Banner } from '@/components/categories-page/Banner/Banner';
import { useScreenDimensions } from '@/hooks/screenDimensions';

import style from '../../../style/main/main.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { AboutUs } from '@/components/main-page/AboutUs/AboutUs';
import Image from 'next/image';
import { Logo } from '@/images';
import Cookies from 'js-cookie';
import Link from 'next/link';

export const Main = () => {
  const { width } = useScreenDimensions();

  const [showCookieModal, setShowCookieModal] = useState(false);

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
        {showCookieModal && (
          <div className={style['modalOverlay']}>
            <div
              className={style['modalContent']}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={style['modalContent__head']}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    style={{ width: 50, height: 50 }}
                    src={Logo}
                    alt={'Logo'}
                    width={80}
                    height={50}
                    unoptimized={true}
                  />
                  <button
                    className={style['modalContent__head__title']}
                    onClick={() => {
                      setShowCookieModal(false);
                    }}
                  >
                    Einstellungen
                  </button>
                </div>
                <p className={style['modalContent__head__cookies']}>
                  Wir benötigen Ihre Zustimmung
                </p>
                <p className={style['modalContent__head__text']}>
                  Um unsere Inhalte anzubieten, zu finanzieren und zu
                  verbessern, verarbeiten wir und unsere Partner
                  personenbezogene Daten, etwa mittels Cookies. Mehr
                  Informationen finden Sie in unserer{' '}
                  <Link style={{ color: '#64748b' }} href={'/datenschutz'}>
                    Datenschutz
                  </Link>{' '}
                  und im{' '}
                  <Link style={{ color: '#64748b' }} href={'impressum'}>
                    Impressum.
                  </Link>
                </p>
              </div>
              <div className={style['modalContent__bottom']}>
                <button
                  onClick={() => {
                    updateCookiePermissions('necessary', true);
                    updateCookiePermissions('externalMedia', true);
                    updateCookiePermissions('legitimateInterest', true);
                    updateCookiePermissions('googleAdsense', true);
                    setShowCookieModal(false);
                  }}
                  className={style['modalContent__bottom--button2']}
                >
                  Zustimmen
                </button>
              </div>
            </div>
          </div>
        )}
        {width > 1000 && <Banner />}

        <AboutUs />
      </Container>
    </div>
  );
};
