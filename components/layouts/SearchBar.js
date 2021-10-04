import React from 'react';
import styles from '../../styles/components/layouts/SearchBar.module.scss'

export const SearchBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        <div className={`${styles.textField} ${styles.borderRight}`}>
          <label htmlFor="search">Search</label>
          <input type="text" id="search" placeholder="restaurants, hotels, spas…" />
        </div>
        <div className={styles.textField}>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" placeholder="Uganda" />
        </div>
      </div>
      <button>SEARCH</button>
      <button>ADD YOUR BUSINESS</button>
    </div>
  )
}