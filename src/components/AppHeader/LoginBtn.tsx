import { Button } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useStyles } from './styles';

const LoginBtn = () => {
  const styles = useStyles();
  const { t } = useTranslation('common');
  return <Button className={styles.classes.btnWrapper}>{t('logOut')}</Button>;
};

export default LoginBtn;
