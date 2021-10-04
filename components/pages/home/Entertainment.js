import React from 'react';
import Titlebar from '../../shared/Titlebar';
import LargeNewsCard from '../../shared/LargeNewsCard';
import NewsCard from '../../shared/NewsCard';
import TipNewsCard from '../../shared/TipNewsCard';
import Review from '../../shared/Review';
import TipAds from '../../shared/TipAds';
import styles from '../../../styles/components/pages/home/Entertainment.module.scss';

const Entertainment = () => {
  const titlebar = {
    title: 'Entertainment',
    tags: [
      { name: 'SHOWBIZ', link: '/' },
      { name: 'DRAMA', link: '/' },
      { name: 'MUSIC', link: '/' }
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
                avatar="imgs/2.png"
                tag="UGANDA"
                title="Sed ut perspiciatis unde omnis iste natus error sit"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
              />
            </div>
            <div className={`${styles.smallNewsCards} ${styles.flex} ${styles.flexColumn} ${styles.justifyBetween}`}>
              <div className={styles.flex} style={{ height: '100%', paddingBottom: '20px' }}>
                <NewsCard
                  avatar="imgs/news/4.png"
                  tag="KENYA"
                  title="Lorem ipsum dolor sit amet, consetetur sadips"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
                />
                <NewsCard
                  avatar="imgs/news/5.png"
                  tag="NIGERIA"
                  title="Sed ut perspiciatis unde omnis iste natus error sit"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
                />
              </div>
              <div style={{ display: 'flex' }} style={{ height: '100%', paddingBottom: '10px' }}>
                <NewsCard
                  avatar="imgs/news/6.png"
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
          <TipNewsCard title="Review of the day">
            <Review
              userInfo={{ avatar: 'imgs/users/1.png', name: 'Martha Kayiwa', reviewCount: 10, photoCount: 9 }}
              reviewInfo={{ name: 'Cafe Javas Kamwokya', rate: 4.5, reviewCount: 123, avatar: 'imgs/reviews/1.png' }}
            />
          </TipNewsCard>
          <div className={styles.tipAds}>
            <TipAds
              link="/"
              avatar="imgs/ads/1.png"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Entertainment;