import React from 'react';
import styles from '../../styles/components/shared/Advertisement.module.scss';

const Advertisement = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.real}>
          <p className={styles.title}>Advertisement</p>
          <img src="imgs/ads.png" className={styles.large} alt="" />
          <img src="imgs/ads-sm.png" alt="" className={styles.sm} />
        </div>
      </div>
    </>
  )
}

export default Advertisement;