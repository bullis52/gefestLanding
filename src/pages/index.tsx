import React from 'react';

import Seo from '@/components/Seo/Seo';
import { BasicLayout } from '@/layouts/BasicLayout';
import { NextPageWithLayout } from '@/types/pages';
import { Main } from '@/components/main-page/Main/Main';
import { Examples } from '@/components/main-page/Examples/Examples';

const E_test: NextPageWithLayout = () => {
  return (
    <>
      <Seo
        title={'Gefest Stroi'}
        description={
          'Ми компанія яка займається реалізацією будівельних проектів різної складності та маштабу'
        }
        image={
          'https://scontent.flwo7-2.fna.fbcdn.net/v/t39.30808-6/438099439_122098631552283222_1485898561480314229_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4jj1u_dx5pQAb4y_VA_&_nc_ht=scontent.flwo7-2.fna&oh=00_AfDiYtelhD4FlBIdCG_HVh0knB6N4og-GB6mbsYjYD6pig&oe=662D7F56'
        }
      />
      <div style={{ display: 'none' }}>
        <a href="https://gefeststroi.com">/</a>
      </div>
      <Main />
      <Examples />
    </>
  );
};

E_test.getLayout = BasicLayout;
export default E_test;
