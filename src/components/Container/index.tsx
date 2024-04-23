import React, { ReactNode } from 'react';

import global from '../../style/globalClass.module.css';

interface Props {
  children?: ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => {
  return <div className={global.container}>{children}</div>;
};
