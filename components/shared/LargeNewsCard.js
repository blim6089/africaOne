import React from 'react';
import styles from '../../styles/components/shared/LargeNewsCard.module.scss';

const LargeNewsCard = ({
  avatar,
  tag,
  title,
  description
}) => {
  return (
    <div className={styles.container}>
      <img src={avatar} className={styles.avatar} alt="" />
      <div className={styles.gradient}></div>
      <div className={styles.body}>
        <span className={styles.tag}>{tag}</span>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default LargeNewsCard;