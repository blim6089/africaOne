import React from 'react';
import Link from 'next/link';
import Searchbar from '../components/pages/countries/Searchbar';
import styles from '../styles/components/pages/countries/Index.module.scss';
import CountryGroup from '../components/pages/countries/CountryGroup';

const Countries = () => {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.body}>
        <div className={styles.main}>
          <div className={styles.header}>
            <img src="/imgs/world-map.png" className={styles.map} />
            <div className={styles.text}>
              <p className={styles.title}>
                Find Helpful Information About<br />
                  All <Link href="/news"><span>African</span></Link> Countries.
              </p>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                <br /><br />
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>

            <div className={styles.searchBar}>
              <Searchbar />
            </div>
          </div>
          <div className={styles.content}>
            <CountryGroup
              title="NORTH AFRICA"
              data={[
                { avatar: '/imgs/flags/algeria.png', name: 'Algeria' },
                { avatar: '/imgs/flags/canary-islands.png', name: 'Canary Islands' },
                { avatar: '/imgs/flags/ceuta.png', name: 'Ceuta' },
                { avatar: '/imgs/flags/egypt.png', name: 'Egypt' },
                { avatar: '/imgs/flags/libya.png', name: 'Libya' },
                { avatar: '/imgs/flags/madeira.png', name: 'Madeira (Portugal)' },
                { avatar: '/imgs/flags/melilla.png', name: 'Melilla' },
                { avatar: '/imgs/flags/moroco.png', name: 'Morocco' },
                { avatar: '/imgs/flags/sudan.png', name: 'Sudan' },
                { avatar: '/imgs/flags/tunisia.png', name: 'Tunisia' },
              ]}
            />
            <CountryGroup
              title="EAST AFRICA"
              data={[
                { avatar: '/imgs/flags/burundi.png', name: 'Burundi' },
                { avatar: '/imgs/flags/comoros.png', name: 'Comoros' },
                { avatar: '/imgs/flags/djibouti.png', name: 'Djibouti' },
                { avatar: '/imgs/flags/eritrea.png', name: 'Eritrea' },
                { avatar: '/imgs/flags/ethiopia.png', name: 'Ethiopia' },
                { avatar: '/imgs/flags/french.png', name: 'French Southern Territories' },
                { avatar: '/imgs/flags/kenya.png', name: 'Kenya' },
                { avatar: '/imgs/flags/madagascar.png', name: 'Madagascar' },
                { avatar: '/imgs/flags/malawi.png', name: 'Malawi' },
                { avatar: '/imgs/flags/mauritius.png', name: 'Mauritius' },
                { avatar: '/imgs/flags/mayotte.png', name: 'Mayotte' },
                { avatar: '/imgs/flags/mozambique.png', name: 'Mozambique' },
                { avatar: '/imgs/flags/reunion.png', name: 'Reunion' },
                { avatar: '/imgs/flags/rwanda.png', name: 'Rwanda' },
                { avatar: '/imgs/flags/seychelles.png', name: 'Seychelles' },
                { avatar: '/imgs/flags/somalia.png', name: 'Somalia' },
                { avatar: '/imgs/flags/somaliland.png', name: 'Somaliland' },
                { avatar: '/imgs/flags/south-sudan.png', name: 'South Sudan' },
                { avatar: '/imgs/flags/tanzania.png', name: 'Tanzania' },
                { avatar: '/imgs/flags/uganda.png', name: 'Uganda' },
                { avatar: '/imgs/flags/zambia.png', name: 'Zambia' },
                { avatar: '/imgs/flags/zimbabwe.png', name: 'Zimbabwe' },
              ]}
            />
            <CountryGroup
              title="CENTRAL AFRICA"
              data={[
                { avatar: '/imgs/flags/burundi.png', name: 'Angola' },
                { avatar: '/imgs/flags/comoros.png', name: 'Cameroon' },
                { avatar: '/imgs/flags/djibouti.png', name: 'Central African Republic' },
                { avatar: '/imgs/flags/eritrea.png', name: 'Chad' },
                { avatar: '/imgs/flags/burundi.png', name: 'Democratic Republic of the Congo' },
                { avatar: '/imgs/flags/comoros.png', name: 'Republic of the Congo' },
                { avatar: '/imgs/flags/djibouti.png', name: 'Equatorial Guinea' },
                { avatar: '/imgs/flags/eritrea.png', name: 'Gabon' },
                { avatar: '/imgs/flags/burundi.png', name: 'São Tomé and Príncipe' },
              ]}
            />
            <CountryGroup
              title="WEST AFRICA"
              data={[
                { avatar: '/imgs/flags/burundi.png', name: 'Benin' },
                { avatar: '/imgs/flags/comoros.png', name: 'Burkina Faso' },
                { avatar: '/imgs/flags/djibouti.png', name: 'Cape Verde' },
                { avatar: '/imgs/flags/eritrea.png', name: 'Ivory Coast' },
                { avatar: '/imgs/flags/burundi.png', name: 'Gambia' },
                { avatar: '/imgs/flags/comoros.png', name: 'Ghana' },
                { avatar: '/imgs/flags/djibouti.png', name: 'Guinea' },
                { avatar: '/imgs/flags/eritrea.png', name: 'Guinea-Bissau' },
                { avatar: '/imgs/flags/burundi.png', name: 'Liberia' },
                { avatar: '/imgs/flags/comoros.png', name: 'Mali' },
                { avatar: '/imgs/flags/djibouti.png', name: 'Mauritania' },
                { avatar: '/imgs/flags/eritrea.png', name: 'Niger' },
                { avatar: '/imgs/flags/burundi.png', name: 'Nigeria' },
                { avatar: '/imgs/flags/comoros.png', name: 'Saint Helena, Ascension and Tristan da Cunha' },
                { avatar: '/imgs/flags/djibouti.png', name: 'Senegal' },
                { avatar: '/imgs/flags/eritrea.png', name: 'Sierra Leone' },
                { avatar: '/imgs/flags/burundi.png', name: 'Togo' },
              ]}
            />
            <CountryGroup
              title="SOUTHERN AFRICA"
              data={[
                { avatar: '/imgs/flags/botswana.png', name: 'Botswana' },
                { avatar: '/imgs/flags/eswatini.png', name: 'Eswatini (Swaziland)' },
                { avatar: '/imgs/flags/lesotho.png', name: 'Lesotho' },
                { avatar: '/imgs/flags/namibia.png', name: 'Namibia' },
                { avatar: '/imgs/flags/south-africa.png', name: 'South Africa' },
              ]}
            />
          </div>
        </div>
      </div>
    </div >
  );
}

export default Countries;