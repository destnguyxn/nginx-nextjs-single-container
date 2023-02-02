import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

import styles from './MyPageBtn.module.scss';

const MyPageBtn = () => {
  const router = useRouter();
  return (
    <Link
      href="/mypage"
      className={`${styles.myPageBtnWrapper} ${
        router.pathname.includes('mypage') ? styles.activeMyPage : undefined
      }`}
    >
      <AiOutlineUser className={styles.colorMyPage} />
      <span style={{ marginLeft: '2px' }}>MY</span>
    </Link>
  );
};

export default MyPageBtn;
