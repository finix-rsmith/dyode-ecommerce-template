import React, { useState } from 'react'
import styles from './HeroSection.module.css'

const HeroSection = (props) => {
  const [SlideCounter, setSlideCounter] = useState(0)
  const finalSlide = props.Slides.length

  const prevSlide = () => {
    SlideCounter > 0 ? setSlideCounter(SlideCounter - 1) : setSlideCounter(finalSlide)
    console.log(SlideCounter)
  }

  const nextSlide = () => {
    SlideCounter < finalSlide ? setSlideCounter(SlideCounter + 1) : setSlideCounter(0)
    console.log(SlideCounter)
  }

  return (
    <div className={styles.HeroSection}>
      {Object.keys(props.Slides).map(slide => (
        <div className={styles.Slide} key={slide}>
          <img src={props.Slides[slide].image} />
          <h1>{props.Slides[slide].title}</h1>
          <p>{props.Slides[slide].subtitle}</p>
          <a onClick={prevSlide}>Previous</a>
          <a onClick={nextSlide}>Next</a>
        </div>
      ))}
    </div>
  )
}

export default HeroSection