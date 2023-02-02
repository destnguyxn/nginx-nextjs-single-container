import { Button } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './LoginBtn.module.scss';

const LoginBtn = () => {
  const { t } = useTranslation('common');
  return <Button className={styles.btnWrapper}>{t('logOut')}</Button>;
};

export default LoginBtn;
