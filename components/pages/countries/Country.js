import React from 'react';
import styles from '../../../styles/components/pages/countries/Country.module.scss';

const Country = ({ avatar, name }) => {
  return (
    <div className={styles.container}>
      <img src={avatar} />
      <span>{name}</span>
    </div>
  )
}

export default Country;