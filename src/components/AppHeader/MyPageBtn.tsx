import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

import { useStyles } from './styles';

const MyPageBtn = () => {
  const router = useRouter();
  const styles = useStyles();
  return (
    <Link
      href="/mypage"
      className={`${styles.classes.myPageBtnWrapper} ${
        router.pathname.includes('mypage')
          ? styles.classes.activeMyPage
          : undefined
      }`}
    >
      <AiOutlineUser className={styles.classes.colorMyPage} />
      <span className="ml-[2px]">MY</span>
    </Link>
  );
};

export default MyPageBtn;
