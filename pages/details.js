import React from 'react';
import AdsSlider from '../components/pages/details/AdsSlider';
import Advertisement from '../components/shared/Advertisement';
import MenuItem from '../components/pages/details/MenuItem';
import NewsCard from '../components/shared/NewsCard';
import styles from '../styles/components/pages/details/Index.module.scss';

const Details = () => {

  return (
    <div className={styles.container}>
      <AdsSlider />
      <div className={styles.header}>
        <div>
          <div>
            <p className={styles.countryName}>Uganda</p>
            <p className={styles.key}>KEY FACTS</p>
            <div className={styles.ulGroup}>
              <ul>
                <li><span><b>Region: </b>East Africa</span></li>
                <li><span><b>Population: </b>43 milion (2018)</span></li>
                <li><span><b>Time Zone: </b>GMT + 3</span></li>
              </ul>
              <ul>
                <li><span><b>Area: </b>241,551 square kilometres </span></li>
                <li><span><b>Capital: </b>Kampala</span></li>
              </ul>
            </div>
          </div>
          <img src="/imgs/uganda-flag.png" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.left}>
            <MenuItem
              title="TOURISM INFO"
              data={[
                'Requirements for Entry into Uganda',
                'Find the most attractive places',
                'Connect with tour and travel firms',
                'Hotels & Safari Lodges',
                'Brief About Uganda',
                'Weather & Climate',
              ]}
            />

            <MenuItem
              title="BUSINESS INFO"
              data={[
                'acts and Figures on Investment',
                'Why invest in Uganda',
                'Key Investment Sectors',
                'Investors Tools',
                'Registering a new company',
                'Industrial & Business Parks',
              ]}
            />

            <MenuItem
              title="USEFUL LINKS"
              data={[
                'acts and Figures on Investment',
                'Why invest in Uganda',
                'Key Investment Sectors',
                'Investors Tools',
                'Registering a new company',
                'Industrial & Business Parks',
              ]}
            />
          </div>
          <div className={styles.right}>
            <p className={styles.title}>BRIEF</p>
            <p className={styles.text}>
              Uganda, country in east-central Africa. About the size of Great Britain, Uganda is populated by dozens of ethnic groups. The English language and Christianity help unite these diverse peoples, who come together in the cosmopolitan capital of Kampala, a verdant city whose plan includes dozens of small parks and public gardens and a scenic promenade along the shore of Lake Victoria, Africa’s largest freshwater lake. The Swahili language unites the country with its East African neighbours Kenya and Tanzania.
              <br /><br />
              “Uganda is a fairy-tale. You climb up a railway instead of a beanstalk, and at the end there is a wonderful new world,” wrote Sir Winston Churchill, who visited the country during its years under British rule and who called it “the pearl of Africa.” Indeed, Uganda embraces many ecosystems, from the tall volcanic mountains of the eastern and western frontiers to the densely forested swamps of the Albert Nile River and the rainforests of the country’s central plateau. The land is richly fertile, and Ugandan coffee has become both a mainstay of the agricultural economy and a favourite of connoisseurs around the world.
              <br /><br />
              Uganda, country in east-central Africa. About the size of Great Britain, Uganda is populated by dozens of ethnic groups. The English language and Christianity help unite these diverse peoples, who come together in the cosmopolitan capital of Kampala, a verdant city whose plan includes dozens of small parks and public gardens and a scenic promenade along the.
            </p>

            <div className={styles.cloneLeftMenu}>
              <MenuItem
                title="TOURISM INFO"
                data={[
                  'Requirements for Entry into Uganda',
                  'Find the most attractive places',
                  'Connect with tour and travel firms',
                  'Hotels & Safari Lodges',
                  'Brief About Uganda',
                  'Weather & Climate',
                ]}
              />

              <MenuItem
                title="BUSINESS INFO"
                data={[
                  'acts and Figures on Investment',
                  'Why invest in Uganda',
                  'Key Investment Sectors',
                  'Investors Tools',
                  'Registering a new company',
                  'Industrial & Business Parks',
                ]}
              />

              <MenuItem
                title="USEFUL LINKS"
                data={[
                  'acts and Figures on Investment',
                  'Why invest in Uganda',
                  'Key Investment Sectors',
                  'Investors Tools',
                  'Registering a new company',
                  'Industrial & Business Parks',
                ]}
              />
            </div>
            <p className={styles.title}>IN THE NEWS</p>
            <div className={styles.items}>
              <NewsCard
                avatar="/imgs/news/15.png"
                title="Lorem ipsum dolor sit amet, consetetur sadips cing elitr, sed diam"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
              />
              <NewsCard
                avatar="/imgs/news/16.png"
                title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
              />
              <NewsCard
                avatar="/imgs/news/17.png"
                title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiumm"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy…"
              />
            </div>
          </div>
        </div>
        <Advertisement />
      </div>
    </div>
  )
}

export default Details;