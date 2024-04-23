import React, { ReactElement, ReactNode, Suspense } from 'react';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

interface Props {
  children?: ReactNode;
}

export const LayoutWrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {/*{!isDesktop && <DynamicMenu />}*/}
      {children}
      <Footer />
    </>
  );
};

export const BasicLayout = (page: ReactElement) => {
  return (
    <Suspense fallback={<main>loading</main>}>
      <LayoutWrapper>{page}</LayoutWrapper>
    </Suspense>
  );
};
