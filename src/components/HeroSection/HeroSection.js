import React, { useState } from 'react'
import styles from './HeroSection.module.css'
import brandTheme from '../../BrandThemes.css'
import Slider from 'react-slick'

const HeroSection = (props) => {

  const textBoxSettings = {}

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dotsClass: styles.SlideNav
  }

  const heroSlides = props.Slides.map( (data, index) => {
    let textBoxSettings = data.textBox
    return (
      <div className={styles.Slide} key={index}>
        <img src={data.image} />
        <div className={styles.TextBox} style={textBoxSettings}>
          <h1 className={data.theme}>{data.title}</h1>
          <h3 className={data.theme}>{data.subtitle}</h3>
          <a className={styles.Button}>Shop now</a>
        </div>
      </div>
    )
  })

  return (
    <div className={styles.HeroSection}>
      <Slider {...settings}>
        {heroSlides}
      </Slider>
    </div>
  )
}

export default HeroSection