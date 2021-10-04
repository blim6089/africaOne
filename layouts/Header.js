import React, { useState } from 'react';
import Link from 'next/link';
import { SearchBar, MenuBar } from '../components/layouts';
import FullSearchBar from '../components/pages/home/FullSearchBar';
import MegaMenu from '../components/pages/home/MegaMenu';
import Search from '../components/pages/home/Search';
import styles from '../styles/components/layouts/Header.module.scss';

export const Header = () => {

  const [open, setOpen] = useState(false);
  const handleMobileMenu = () => {
    setOpen(!open);
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.desktopMenu}>
          <div className={styles.headerContainer}>
            <div className={styles.header}>
              <img src="imgs/logo.svg" alt="" />
              <SearchBar />
              <img src="imgs/mail.svg" alt="" />
            </div>
          </div>
          <div className={styles.menuContainer}>
            <div className={styles.menubar}>
              <MenuBar />
              <div className={styles.toolbar}>
                <Search />
                <MegaMenu />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mobileMenu}>
          <div className={styles.headerContainer}>
            <div className={styles.searchField}>
              <label htmlFor="">Search</label>
              <input type="text" placeholder="restaurants, hotels..." />
              <button><img src="imgs/icons/search.svg" alt="" /></button>
            </div>
            <button>ADD YOUR BUSINESS</button>
          </div>
          <div className={styles.menuContainer}>
            <button onClick={handleMobileMenu}><img src="imgs/icons/hamburger.svg" alt="" /></button>
            <img src="imgs/logo.svg" alt="" />
            <button><img src="imgs/icons/search.svg" alt="" /></button>
          </div>
        </div>

        <div className={`${styles.mobileSlideMenu} ${open ? styles.open : ``}`}>
          <FullSearchBar />
          <div className={styles.links}>
            <Link href="/">News</Link>
            <Link href="/">Business</Link>
            <Link href="/">Sports</Link>
            <Link href="/">Tech & Science</Link>
            <Link href="/">World</Link>
            <Link href="/">Innovation</Link>
            <Link href="/">Entertainment & Arts</Link>
            <Link href="/">Health</Link>
            <Link href="/">Politics</Link>
            <Link href="/">Videos</Link>
            <Link href="/">Countries</Link>
          </div>

          <div className={styles.link}>
            <span>Follow Africa one</span>
            <div>
              <button><img src="imgs/icons/facebook.svg" alt="" /></button>
              <button><img src="imgs/icons/twitter.svg" alt="" /></button>
              <button><img src="imgs/icons/youtube.svg" alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}