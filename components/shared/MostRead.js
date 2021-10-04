import React from 'react';
import styles from '../../styles/components/shared/MostRead.module.scss';

const MostRead = ({ title, data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {data.map(item => {
        return (
          <div className={styles.article}>
            <img src={item.image} />
            <div>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MostRead;