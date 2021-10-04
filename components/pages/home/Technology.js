import React from 'react';
import Titlebar from '../../shared/Titlebar';
import LargeNewsCard from '../../shared/LargeNewsCard';
import NewsCard from '../../shared/NewsCard';
import TipAds from '../../shared/TipAds';
import styles from '../../../styles/components/pages/home/Technology.module.scss';

const Technology = () => {
  const titlebar = {
    title: 'Technology',
    tags: [
      { name: 'INNOVATIONS', link: '/' },
      { name: 'HEALTH', link: '/' },
      { name: 'SCIENCE', link: '/' }
    ],
    more: true
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <Titlebar {...titlebar} />
          <div className={styles.body}>
            <div className={styles.largeNewsCard}>
              <LargeNewsCard
                avatar="imgs/3.png"
                tag="UGANDA"
                title="Sed ut perspiciatis unde omnis iste natus error sit"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
              />
            </div>
            <div className={`${styles.smallNewsCards} ${styles.flex} ${styles.flexColumn} ${styles.justifyBetween}`}>
              <div className={styles.flex} style={{ height: '100%', paddingBottom: '20px' }}>
                <NewsCard
                  avatar="imgs/news/7.png"
                  tag="KENYA"
                  title="Lorem ipsum dolor sit amet, consetetur sadips"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
                />
                <NewsCard
                  avatar="imgs/news/8.png"
                  tag="NIGERIA"
                  title="Sed ut perspiciatis unde omnis iste natus error sit"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
                />
              </div>
              <div style={{ display: 'flex' }} style={{ height: '100%', paddingBottom: '10px' }} className={styles.hidden}>
                <NewsCard
                  avatar="imgs/news/9.png"
                  tag="KENYA"
                  title="Lorem ipsum dolor sit amet, consetetur sadips"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
                  direction="row"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <TipAds link="/" avatar="imgs/ads/2.png" />
          <TipAds link="/" avatar="imgs/ads/3.png" />
        </div>
      </div>
    </>
  )
}

export default Technology;