import React from 'react';
import Link from 'next/link';
import styles from '../../styles/components/layouts/MenuBar.module.scss';

export const MenuBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/"><img src="imgs/icons/home.svg" alt="" /></Link>
      <Link href="/news">News</Link>
      <Link href="/news">Business</Link>
      <Link href="/news">Sports</Link>
      <Link href="/news">Tech & Science</Link>
      <Link href="/news">World</Link>
      <Link href="/news">Innovation</Link>
      <Link href="/news">Entertainment & Arts</Link>
      <Link href="/news">Health</Link>
      <Link href="/news">Politics</Link>
      <Link href="/news">Videos</Link>
    </div>
  );
}