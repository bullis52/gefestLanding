import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import style from '../../style/layout/Header.module.scss';
import { facebook, insta, Logo, xIcon, youtube } from '@/images';
import { Modal } from '@mui/base';
import { useFormik } from 'formik';
import { Input } from '@/components/Input';
import { app } from '@/store/firebase.config';
import { addDoc, collection, getFirestore } from '@firebase/firestore';
import { validationSingIn } from '@/services/validation/validation';
import { useScreenDimensions } from '@/hooks/screenDimensions';

export const Header: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const [openMenu, setOpenMenu] = useState(false);
  const db = getFirestore(app);

  const { width } = useScreenDimensions();

  const formik = useFormik({
    initialValues: { name: '', secondName: '', number: '' },
    validationSchema: validationSingIn,
    validateOnChange: true,
    onSubmit: async (val) => {
      try {
        const clientsCollection = collection(db, 'Клієнти');
        await addDoc(clientsCollection, val);
        formik.resetForm();
        setOpenMenu(false);
        setStatus('Дані успішно відправлено!');
      } catch (error) {
        setStatus('Помилка при відправці даних. Будь ласка, спробуйте ще раз.');
      }
    },
  });

  return (
    <header className={style['header']}>
      <div className={style['header__bottom']}>
        <div className={style['header__bottom-container']}>
          <div className={style['header__bottomWrap']}>
            <Link href={'/'}>
              <Image
                style={{ cursor: 'pointer' }}
                src={Logo}
                alt="Logo"
                width={130}
                height={97}
                unoptimized={true}
              />
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{ display: 'flex', paddingBottom: 10, paddingTop: 10 }}
              >
                <Image src={insta} alt={'instagram'} width={20} height={20} />
                <a
                  href={'https://www.instagram.com/gefeststroi/'}
                  style={{ paddingLeft: 10, color: '#fff' }}
                >
                  gefeststroi
                </a>
              </div>
              <div style={{ display: 'flex', paddingBottom: 10 }}>
                <Image src={youtube} alt={'youtube'} width={20} height={20} />
                <a
                  href={
                    'https://www.youtube.com/channel/UCM2Lf1qqD9gNQ7RnHfY7EzQ'
                  }
                  style={{ paddingLeft: 10, color: '#fff' }}
                >
                  gefeststroi
                </a>
              </div>
              <div style={{ display: 'flex', paddingBottom: 10 }}>
                <Image src={facebook} alt={'facebook'} width={20} height={20} />
                <a
                  href={'https://www.facebook.com/gefeststroi1'}
                  style={{ paddingLeft: 10, color: '#fff' }}
                >
                  gefeststroi
                </a>
              </div>
            </div>
            {width > 700 && (
              <>
                {' '}
                <div>
                  <button
                    onClick={() => {
                      setOpenMenu(!openMenu);
                    }}
                    style={{
                      width: 200,
                      height: 50,
                      background: 'none',
                      border: 'none',
                      backgroundColor: '#043e54',
                      fontSize: 20,
                      color: '#fff',
                      cursor: 'pointer',
                    }}
                  >
                    Замовити звінок
                  </button>
                </div>
                <div>
                  <a style={{ color: '#fff' }}>Контакти</a>
                  <div>
                    <div>
                      <a href="tel:+380686454355" style={{ color: '#fff' }}>
                        +380 068 64 54 355
                      </a>
                    </div>
                    <div>
                      <a href="tel:+380976145396" style={{ color: '#fff' }}>
                        +380 097 614 53 96
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          {width < 700 && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <div>
                <button
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                  style={{
                    width: 200,
                    height: 50,
                    background: 'none',
                    border: 'none',
                    backgroundColor: '#043e54',
                    fontSize: 20,
                    color: '#fff',
                    cursor: 'pointer',
                  }}
                >
                  Замовити звінок
                </button>
              </div>
              <div>
                <a style={{ color: '#fff' }}>Контакти</a>
                <div>
                  <div>
                    <a href="tel:+380686454355" style={{ color: '#fff' }}>
                      +380 068 64 54 355
                    </a>
                  </div>
                  <div>
                    <a href="tel:+380976145396" style={{ color: '#fff' }}>
                      +380 097 614 53 96
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {openMenu && (
        <Modal
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className={style['modal']}
        >
          <div>
            <Image
              className={style['modal__close']}
              src={xIcon}
              alt={'X'}
              width={22}
              height={22}
              onClick={() => setOpenMenu(false)}
            />
            <div className={style['modal--wrap']}>
              <Input
                name={'number'}
                handleChange={formik.setFieldValue}
                value={formik.values?.number}
                placeholder={'Номер Телефону'}
                allowOnlyNumbers
                short
              />
              <Input
                name={'name'}
                handleChange={formik.setFieldValue}
                value={formik.values.name}
                placeholder={'І`мя'}
                short
              />
              <Input
                name={'secondName'}
                handleChange={formik.setFieldValue}
                value={formik.values.secondName}
                placeholder={'Фамілія'}
                short
              />
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
                onClick={() => {
                  formik.submitForm();
                }}
              >
                Відправити
              </button>
            </div>
          </div>
        </Modal>
      )}
      {status === 'Дані успішно відправлено!' && (
        <Modal
          open={status === 'Дані успішно відправлено!'}
          onClose={() => setStatus('')}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className={style['modal']}
        >
          <div>
            <Image
              className={style['modal__close']}
              src={xIcon}
              alt={'X'}
              width={22}
              height={22}
              onClick={() => setStatus('')}
            />
            <div>
              <p
                style={{
                  fontSize: 30,
                  textAlign: 'center',
                  marginTop: 70,
                  lineHeight: 1,
                }}
              >
                Ваші дані успішно відправлені
              </p>
            </div>
          </div>
        </Modal>
      )}
    </header>
  );
};
