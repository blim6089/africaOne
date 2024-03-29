import React from 'react';
import Link from 'next/link';

const TipAds = ({ link, avatar }) => {
  return (
    <>
      <div className="container" style={{ display: 'flex', marginBottom: '20px' }}>
        <Link href={link}>
          <img src={avatar} style={{ width: '100%' }} alt="" />
        </Link>
      </div>
    </>
  )
}

export default TipAds;