import React from 'react';
import Link from 'next/link';
import Titlebar from '../../shared/Titlebar';
import LargeNewsCard from '../../shared/LargeNewsCard';
import NewsCard from '../../shared/NewsCard';
import TipAds from '../../shared/TipAds';
import styles from '../../../styles/components/pages/home/Travel.module.scss';

const Travel = () => {
  const titlebar = {
    title: 'Travel',
    tags: [
      { name: 'TOURISM', link: '/' },
      { name: 'PEOPLE', link: '/' },
      { name: 'FOOD', link: '/' }
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
                avatar="imgs/4.png"
                tag="UGANDA"
                title="Sed ut perspiciatis unde omnis iste natus error sit"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
              />
            </div>
            <div className={`${styles.smallNewsCards} ${styles.flex} ${styles.flexColumn} ${styles.justifyBetween}`}>
              <div className={styles.flex} style={{ height: '100%', paddingBottom: '20px' }}>
                <NewsCard
                  avatar="imgs/news/10.png"
                  tag="KENYA"
                  title="Lorem ipsum dolor sit amet, consetetur sadips"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
                />
                <NewsCard
                  avatar="imgs/news/11.png"
                  tag="NIGERIA"
                  title="Sed ut perspiciatis unde omnis iste natus error sit"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
                />
              </div>
              <div className={styles.hidden} style={{ display: 'flex' }} style={{ height: '100%', paddingBottom: '10px' }}>
                <NewsCard
                  avatar="imgs/news/12.png"
                  tag="KENYA"
                  title="Lorem ipsum dolor sit amet, consetetur sadips"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
                  direction="row"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.right} ${styles.hidden}`}>
          <TipAds link="/" avatar="imgs/ads/4.png" />
          <div className={styles.createBusinessCard}>
            <p>List your business on</p>
            <p className={styles.title}>Africa One for free</p>
            <p className={styles.link}>
              <Link href="/">Click here to create your business listing now</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Travel;