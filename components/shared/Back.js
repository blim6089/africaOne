import React from 'react';
import Link from 'next/link';
import styles from '../../styles/components/shared/Back.module.scss';

const Back = ({ link }) => {
  return (
    <div className={styles.container}>
      <img classNam={styles.ads} src="imgs/ads-back.png" />
      <Link href={link}>
        <span className={styles.link}>
          <img src="/imgs/icons/back.svg" />
          Back
        </span>
      </Link>
    </div>
  );
};

export default Back;