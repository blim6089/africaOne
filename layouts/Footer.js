import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/layouts/Footer.module.scss';

export const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.socialLinkContainer}>
          <div className={styles.socialLink}>
            <img src="imgs/logo.svg" alt="" />
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
        <div className={styles.sitemapContainer}>
          <div className={styles.sitemapFooter}>
            <div className={styles.sitemap}>
              <div>
                <div className={styles.item}>
                  <p className={styles.title}>
                    Africa One
                </p>
                  <p className={styles.linkItem}><Link href="/">Discover</Link></p>
                  <p className={styles.linkItem}><Link href="/">Collections</Link></p>
                  <p className={styles.linkItem}><Link href="/">Talk</Link></p>
                  <p className={styles.linkItem}><Link href="/">Events</Link></p>
                  <p className={styles.linkItem}><Link href="/">Developers</Link></p>
                  <p className={styles.linkItem}><Link href="/">RSS</Link></p>
                </div>
                <div className={styles.item}>
                  <p className={styles.title}>
                    Business
                </p>
                  <p className={styles.linkItem}><Link href="/">Claim your Business Page</Link></p>
                  <p className={styles.linkItem}><Link href="/">Advertise</Link></p>
                  <p className={styles.linkItem}><Link href="/">Reservations</Link></p>
                  <p className={styles.linkItem}><Link href="/">Business Success Stories</Link></p>
                  <p className={styles.linkItem}><Link href="/">Business Report</Link></p>
                  <p className={styles.linkItem}><Link href="/">Blog for Business Owners</Link></p>
                </div>
              </div>
              <div>
                <div className={styles.item}>
                  <p className={styles.title}>
                    This Site
                  </p>
                  <p className={styles.linkItem}><Link href="/">About</Link></p>
                  <p className={styles.linkItem}><Link href="/">Careers</Link></p>
                  <p className={styles.linkItem}><Link href="/">Press</Link></p>
                  <p className={styles.linkItem}><Link href="/">Volunteer</Link></p>
                </div>
                <div className={styles.item}>
                  <p className={styles.title}>&nbsp;</p>
                  <p className={styles.linkItem}><Link href="/">Content Guidelines</Link></p>
                  <p className={styles.linkItem}><Link href="/">Terms of Service</Link></p>
                  <p className={styles.linkItem}><Link href="/">Privacy Policy</Link></p>
                </div>
              </div>
            </div>
            <div className={styles.links}>
              <p>NEWS  |  MAIL  |  CLOUD HOSTING  |  DATA BACK UP  |  BUSINESS LISTINGS  |   REVIEWS  |  ELECTRIFY AFRICA</p>
              <p className="copyright">Copyright © 2020 AfricaOne.com | Africa One is not responsible for the content of external sites.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}