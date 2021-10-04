import React from 'react';
import styles from '../../../styles/components/pages/countries/CountryGroup.module.scss';
import Country from './Country';

const CountryGroup = ({ title, data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.group}>
        {
          data.map((item, index) => <Country key={index} avatar={item.avatar} name={item.name} />)
        }
      </div>
    </div>
  )
}

export default CountryGroup;