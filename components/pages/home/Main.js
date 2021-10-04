import React from 'react';
import BusinessItem from '../../shared/BusinessItem';
import NewsCard from '../../shared/NewsCard';
import TipAds from '../../shared/TipAds';
import TipNewsCard from '../../shared/TipNewsCard';
import Email from '../../shared/Email';
import NewsSlider from './NewsSlider';
import RegisterCard from './RegisterCard';
import Titlebar from '../../shared/Titlebar';
import styles from '../../../styles/components/pages/home/Main.module.scss';

const Main = () => {

  const titlebar = {
    title: 'Trending',
    tags: [
      { name: 'SPORTS', link: '/' },
      { name: 'ENTERTAINMENT', link: '/' },
      { name: 'BUSINESS', link: '/' },
      { name: 'SCIENCE & TECHNOLOGY', link: '/' }
    ],
    more: false
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.sectionOne}>
            <div className={styles.slider}>
              <NewsSlider />
            </div>
            <NewsCard
              avatar="imgs/news/13.png"
              tag="AFRICA"
              title="African nationals ‘mistreated, evicted’ in China over coronavirus"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore e"
            />
          </div>
          <div className={styles.sectionTwo}>
            <Titlebar {...titlebar} />
            <div className={styles.body}>
              <NewsCard
                avatar="imgs/news/14.png"
                title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
              />
              <NewsCard
                avatar="imgs/news/15.png"
                title="Lorem ipsum dolor sit amet, consetetur sadips cing elitr, sed diam"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
              />
              <NewsCard
                avatar="imgs/news/16.png"
                title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
              />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Email email="yourname@africaone.com" />
          <RegisterCard />
          <TipNewsCard title="Top businesses near you">
            <BusinessItem
              avatar="imgs/misc/1.png"
              rate={4.5}
              point="17"
              title="Cafe Javas Kampala"
              description="Plot 7 Kampala Road"
              tag="For Breakfast, Lunch, Supper & Takea…"
              direction="column"
            />
          </TipNewsCard>
          <p className={styles.link}>Click here for more listings nearby</p>
          <div className={styles.hidden}>
            <TipAds link="/" avatar="imgs/ads/5.png" />
          </div>
        </div>
      </div >
    </>
  )
}

export default Main;