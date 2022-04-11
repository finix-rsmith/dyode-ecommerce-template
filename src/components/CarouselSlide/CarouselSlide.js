import React from 'react'
import styles from './CarouselSlide.module.css'
import HeroSection from '../HeroSection/HeroSection.js'
import ProductSlider from '../ProductSlider/ProductSlider.js'

const CarouselSlide = (props) => {
  let template = <div/>

  const setTemplate = (templateName, content, index) => {
    if (templateName == 'Hero') {
      template = <HeroSection Slides={content} />
    } else if (templateName == 'Product') {
      template = <ProductSlider Slides={content} />
    }
  }

  setTemplate(props.Type, props.Slides, props.Counter)

  return (
    <div className={styles.CarouselSlide}>
      {template}
    </div>
  )
}

export default CarouselSlide