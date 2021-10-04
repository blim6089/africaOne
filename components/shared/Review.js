import React from 'react';
import Star from './Star';
import styles from '../../styles/components/shared/Review.module.scss';

const Review = ({ userInfo, reviewInfo }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.userCard}>
          <div className={styles.avatar}>
            <img src={userInfo.avatar} alt="" />
          </div>
          <div className={styles.details}>
            <p className={styles.name}>{userInfo.name}</p>
            <div>
              <div className={styles.review}>
                <img src="imgs/icons/full-star.svg" alt="" />
                <span>{userInfo.reviewCount} reviews</span>
              </div>
              <div className={styles.photo}>
                <img src="imgs/icons/camera.svg" alt="" />
                <span>{userInfo.photoCount} Photos</span>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.addPhoto}>Added a photo</p>
        <div className={styles.reviewCard}>
          <p className={styles.name}>{reviewInfo.name}</p>
          <Star rate={reviewInfo.rate} point={`${reviewInfo.reviewCount} Reviews`} />
          <div className={styles.avatar}>
            <img src={reviewInfo.avatar} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Review;