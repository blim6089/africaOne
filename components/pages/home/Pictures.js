import React from 'react';
import Titlebar from '../../shared/Titlebar';
import TipAds from '../../shared/TipAds';
import styles from '../../../styles/components/pages/home/Pictures.module.scss';
import ConfirmSharingStory from '../../shared/ConfirmSharingStory';
import AfricaOneCard from '../../shared/AfricaOneCard';

const Pictures = () => {
  const titlebar = {
    title: 'In Pictures',
    tags: [
      { name: 'PHOTO OF THE DAY', link: '/' },
    ],
    more: true
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <Titlebar {...titlebar} />
          <div className={styles.body}>
            <div className={styles.sectionOne}>
              <div>
                <img src="imgs/pictures/1.png" alt="" />
              </div>
              <div className={styles.hidden}>
                <div className={styles.header}>
                  <p className={styles.title}>Nairobi dancers and Roman Santas</p>
                  <p className={styles.description}>Photo Credit: Kasaga News Media</p>
                </div>
                <div className={styles.content}>
                  <p className={styles.photo}>YESTERDAY’S PHOTO</p>
                  <div className={styles.card}>
                    <img src="imgs/pictures/2.png" alt="" />
                    <div className={styles.gradient}></div>
                    <p className={styles.title}>Lorem ipsum dolor sit amet, consetetur sadipscing elite</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sectionTwo}>
              <img src="imgs/children.png" alt="" />
              <div>
                <p className={styles.title}>
                  See more photos at <span className={styles.yellow}>seeafrica.org</span>
                </p>
                <span className={styles.visit}>VISIT NOW</span>
              </div>
            </div>
            <div className={styles.sectionThree}>
              <ConfirmSharingStory />
            </div>
          </div>
        </div>
        <div className={`${styles.right} ${styles.hidden}`}>
          <TipAds link="/" avatar="imgs/ads/6.png" />
          <TipAds link="/" avatar="imgs/ads/7.png" />
          <AfricaOneCard />
        </div>
      </div>
    </>
  )
}

export default Pictures;