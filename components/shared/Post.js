import React from 'react';
import styles from '../../styles/components/shared/Post.module.scss';

const Post = ({ title, user, postedDate, content }) => {
  return (
    <div className={styles.container}>
      <div className={styles.externalLinks}>
        <span>SHARE</span>
        <img src="/imgs/icons/facebook.svg" />
        <img src="/imgs/icons/twitter.svg" />
        <img src="/imgs/icons/linkedin.svg" />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>By <span className={styles.name}>{user}</span> AfricaOne | Updated {postedDate}</p>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  )
}

export default Post;