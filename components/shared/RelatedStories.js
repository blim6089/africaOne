import React from 'react';
import Titlebar from '../../components/shared/Titlebar';
import styles from '../../styles/components/shared/RelatedStories.module.scss';

const RelatedStories = ({ data }) => {
  const titlebar = {
    title: 'Related Stories',
    tags: [
      { name: 'AFRICA', link: '/' },
    ],
    more: false
  }

  return (
    <div className={styles.container}>
      <Titlebar {...titlebar} />
      {
        data.map(item => {
          return (
            <div className={styles.item}>
              <img src={item.avatar} />
              <div>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
};

export default RelatedStories;