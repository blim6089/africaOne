import React from 'react';
import Star from './Star';
import styles from '../../styles/components/shared/BusinessItem.module.scss';

const BusinessItem = ({
  avatar,
  title,
  rate,
  point,
  description,
  tag,
  direction = 'row'
}) => {
  return (
    <>
      <div className={`${styles.container} ${direction === 'column' && styles.flexColumn}`}>
        <div className={`${styles.avatar} ${direction === 'column' && styles.noMarginRight}`}>
          <img src={avatar} alt="" />
        </div>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <div className={styles.rate}>
            <Star rate={rate} point={point} />
          </div>
          <p className={styles.description}>{description}</p>
          <p className={styles.tag}>{tag}</p>
        </div>
      </div>
    </>
  )
}

export default BusinessItem;