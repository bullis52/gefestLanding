import React from 'react';
import { TextField } from '@mui/material';

import style from '../../style/input.module.scss';
import { InputMask } from '@react-input/mask';

interface Props {
  value: string | number;
  label?: string;
  handleChange: (name: string, val: string | number) => void;
  name: string;
  error?: string;
  short?: boolean;
  pass?: boolean;
  styles?: React.CSSProperties;
  placeholder?: string;
  isPrice?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  allowOnlyNumbers?: boolean;
}

export const Input: React.FC<Props> = ({
  value,
  label,
  handleChange,
  name,
  error,
  short,
  pass,
  styles,
  placeholder,
  isPrice,
  onBlur,
  onFocus,
  allowOnlyNumbers,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (isPrice) {
      inputValue = inputValue.replace(/[^0-9.]/g, '');

      const dotCount = inputValue.split('.').length - 1;
      if (dotCount > 1) {
        inputValue = inputValue.slice(0, -1);
      }
    }

    handleChange(name, inputValue);
  };

  return (
    <div className={style['input--wrap']}>
      <p>{label}</p>
      {allowOnlyNumbers ? (
        <InputMask
          mask="+380 (__)-___-__-__"
          replacement={{ _: /\d/ }}
          value={value}
          onChange={handleInputChange}
          onBlur={isPrice ? onBlur : undefined}
          className={short ? style['input__short'] : style['input']}
          onFocus={isPrice ? onFocus : undefined}
          placeholder={placeholder}
          style={{
            padding: 10,
            height: 50,
            fontSize: 16,
            borderColor: 'rgba(0, 0, 0, 0.23)',
            borderWidth: 1.5,
            borderRadius: 5,
          }}
        />
      ) : (
        <TextField
          style={styles}
          onChange={handleInputChange}
          value={value} // Make sure this value is updated from the parent component
          variant="outlined"
          placeholder={placeholder}
          className={short ? style['input__short'] : style['input']}
          error={!!error}
          type={pass ? 'password' : 'text'}
          color={styles ? undefined : 'primary'}
          onBlur={isPrice ? onBlur : undefined}
          onFocus={isPrice ? onFocus : undefined}
        />
      )}
      {error ? <p className={style['input--error']}>{error}</p> : null}
    </div>
  );
};
