import React, { useState } from 'react'
import styles from './CarouselSlider.module.css'
import CarouselSlide from '../CarouselSlide/CarouselSlide.js'

const CarouselSlider = (props) => {
  const [SlideCounter, setSlideCounter] = useState(0)

  return (
    <div className={styles.CarouselSlider}>
      <CarouselSlide Type={props.Template} Slides={props.Slides} Counter={SlideCounter}/>
    </div>
  )
}

export default CarouselSlider