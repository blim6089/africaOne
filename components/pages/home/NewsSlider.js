import React from "react";
import Slider from "react-slick";
import styles from '../../../styles/components/pages/home/NewsSlider.module.scss';

const NewsSlider = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a></a>
      );
    },
    dots: true,
    dotsClass: 'dots',
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const carouselContent = [
    {
      'description': 'Kenya: As wildebeest migrate, COVID-19 keeps tourists at bay',
      'image': 'imgs/carousel/1.png'
    },
    {
      'description': 'Kenya: As wildebeest migrate, COVID-19 keeps tourists at bay',
      'image': 'imgs/carousel/1.png'
    },
    {
      'description': 'Kenya: As wildebeest migrate, COVID-19 keeps tourists at bay',
      'image': 'imgs/carousel/1.png'
    },
  ]

  return (
    <>
      <div className={styles.container}>
        <Slider {...settings}>
          {
            carouselContent.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <div className={styles.gradient}></div>
                  <img src={item.image} alt="" />
                  <p className={styles.description}>{item.description}</p>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </>
  )
}

export default NewsSlider;