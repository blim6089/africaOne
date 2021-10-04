import React from 'react';
import styles from '../../styles/components/shared/NewsCard.module.scss';

const NewsCard = ({
  avatar,
  tag,
  title,
  description,
  direction = 'column'
}) => {
  return (
    <div className={`${styles.container} ${direction !== 'row' && styles.flexColumn}`}>
      <div className={styles.header}>
        <img src={avatar} alt="" />
        <span className={styles.tag}>{tag}</span>
      </div>
      <div className={styles.body}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default NewsCard;