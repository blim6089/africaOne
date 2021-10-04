import React from 'react';
import Titlebar from '../../shared/Titlebar';
import LargeNewsCard from '../../../components/shared/LargeNewsCard';
import NewsCard from '../../../components/shared/NewsCard';
import TipNewsCard from '../../shared/TipNewsCard';
import BusinessItem from '../../../components/shared/BusinessItem';
import styles from '../../../styles/components/pages/home/Sports.module.scss';

const Sports = () => {
  const titlebar = {
    title: 'Sports',
    tags: [
      { name: 'FOOTBALL', link: '/' },
      { name: 'RUGBY', link: '/' },
      { name: 'MOTORSPORT', link: '/' }
    ],
    more: true
  }

  const businessItems = [
    {
      avatar: 'imgs/businesses/1.png',
      title: 'Luwombo Restaurant',
      rate: 4.5,
      point: 14,
      description: 'Plot 7 Entebbe Road',
      tag: 'For Breakfast, Lunch, Sup…'
    },
    {
      avatar: 'imgs/businesses/2.png',
      title: '2k Restaurant',
      rate: 4.5,
      point: 61,
      description: 'Plot 7 Entebbe Road',
      tag: 'For Breakfast, Lunch, Sup…'
    },
    {
      avatar: 'imgs/businesses/3.png',
      title: 'Uhuru Restaurant',
      rate: 4.5,
      point: 34,
      description: 'Plot 7 Entebbe Road',
      tag: 'For Breakfast, Lunch, Sup…'
    },
    {
      avatar: 'imgs/businesses/4.png',
      title: 'The Food Hub',
      rate: 4.5,
      point: 54,
      description: 'Plot 7 Entebbe Road',
      tag: 'For Breakfast, Lunch, Sup…'
    },
  ]

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <Titlebar {...titlebar} />
          <div className={styles.body}>
            <div className={styles.largeNewsCard}>
              <LargeNewsCard
                avatar="imgs/1.png"
                tag="UGANDA"
                title="Sed ut perspiciatis unde omnis iste natus error sit"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
              />
            </div>
            <div className={`${styles.smallNewsCards} ${styles.flex} ${styles.flexColumn} ${styles.justifyBetween}`}>
              <div className={styles.flex} style={{ height: '100%', paddingBottom: '20px' }}>
                <NewsCard
                  avatar="imgs/news/1.png"
                  tag="KENYA"
                  title="Lorem ipsum dolor sit amet, consetetur sadips"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
                />
                <NewsCard
                  avatar="imgs/news/2.png"
                  tag="NIGERIA"
                  title="Sed ut perspiciatis unde omnis iste natus error sit"
                  description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
                />
              </div>
              <div style={{ display: 'flex' }} style={{ height: '100%', paddingBottom: '10px' }}>
                <NewsCard
                  avatar="imgs/news/3.png"
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
          <TipNewsCard title="Top businesses near you">
            {businessItems.map((item, index) => <BusinessItem {...item} />)}
          </TipNewsCard>
          <p className={styles.link}>Click here to add your business now</p>
        </div>
      </div>
    </>
  )
}

export default Sports;