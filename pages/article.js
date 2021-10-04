import React from 'react';
import Back from '../components/shared/Back.js';
import ConfirmSharingStory from '../components/shared/ConfirmSharingStory';
import MostRead from '../components/shared/MostRead.js';
import TipAds from '../components/shared/TipAds';
import Email from '../components/shared/Email';
import styles from '../styles/components/pages/article/Index.module.scss';
import RegisterCard from '../components/pages/home/RegisterCard.js';
import TipNewsCard from '../components/shared/TipNewsCard';
import BusinessItem from '../components/shared/BusinessItem';
import Review from '../components/shared/Review';
import AfricaOneCard from '../components/shared/AfricaOneCard';
import Post from '../components/shared/Post';
import RelatedStories from '../components/shared/RelatedStories';
import PaidContent from '../components/shared/PaidContent';

const Article = () => {
  const post = {
    title: 'African nationals ‘mistreated, evicted’ in China over coronavirus',
    user: 'Yusuf Kayiwa',
    postedDate: 'August 7, 2020',
    content: `
      <img src="/imgs/posts/1.png" />
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Bonsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ametpsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.      
      <img src="/imgs/posts/2.png" />
      <p style="font-size: 16px; font-style: italic; line-height: 24px; color: #888888; margin-top: -30px; margin-bottom: 20px;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Bonsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ametpsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    `
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
  ];

  const relatedStories = [
    {
      avatar: '/imgs/story.png',
      title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam'
    },
    {
      avatar: '/imgs/story.png',
      title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam'
    },
    {
      avatar: '/imgs/story.png',
      title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam'
    },
    {
      avatar: '/imgs/story.png',
      title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam'
    },
    {
      avatar: '/imgs/story.png',
      title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam'
    },
  ]

  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.body}>
          <div className={styles.hidden}>
            <Back link="/home" />
          </div>
          <div className={styles.main}>
            <div className={styles.left}>
              <Post {...post} />
              <RelatedStories data={relatedStories} />
              <div className={styles.hidden}>
                <PaidContent />
                <ConfirmSharingStory />
              </div>
            </div>
            <div className={`${styles.right} ${styles.hidden}`}>
              <MostRead
                title="Most Read"
                data={[
                  {
                    image: '/imgs/article.png',
                    title: 'Lorem ipsum dolor sit amet, consetetur sadips',
                    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr..'
                  }, {
                    image: '/imgs/article.png',
                    title: 'Lorem ipsum dolor sit amet, consetetur sadips',
                    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr..'
                  }, {
                    image: '/imgs/article.png',
                    title: 'Lorem ipsum dolor sit amet, consetetur sadips',
                    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr..'
                  }, {
                    image: '/imgs/article.png',
                    title: 'Lorem ipsum dolor sit amet, consetetur sadips',
                    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr..'
                  }, {
                    image: '/imgs/article.png',
                    title: 'Lorem ipsum dolor sit amet, consetetur sadips',
                    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr..'
                  }
                ]}
              />
              <TipAds link="/" avatar="/imgs/ads-lg.png" />
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
              <TipAds link="/" avatar="imgs/ads/5.png" />
              <TipNewsCard title="Top businesses near you">
                {businessItems.map((item, index) => <BusinessItem {...item} />)}
              </TipNewsCard>
              <p className={styles.link}>Click here to add your business now</p>
              <TipNewsCard title="Review of the day">
                <Review
                  userInfo={{ avatar: 'imgs/users/1.png', name: 'Martha Kayiwa', reviewCount: 10, photoCount: 9 }}
                  reviewInfo={{ name: 'Cafe Javas Kamwokya', rate: 4.5, reviewCount: 123, avatar: 'imgs/reviews/1.png' }}
                />
              </TipNewsCard>
              <TipAds link="/" avatar="imgs/ads/1.png" />
              <TipAds link="/" avatar="imgs/ads/2.png" />
              <TipAds link="/" avatar="imgs/ads/3.png" />
              <TipAds link="/" avatar="imgs/ads/6.png" />
              <TipAds link="/" avatar="imgs/ads/7.png" />
              <AfricaOneCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;