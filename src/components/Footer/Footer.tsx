import React from 'react';
import style from '../../style/layout/Footer.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Logo } from '@/images';

export const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <footer className={style.footer}>
      <Image
        style={{ cursor: 'pointer' }}
        src={Logo}
        alt={'Logo'}
        width={150}
        height={127}
        unoptimized={true}
        onClick={() => router.push('/')}
      />
      <p className={style.footer__rights}>© 2024 gefest</p>
    </footer>
  );
};
