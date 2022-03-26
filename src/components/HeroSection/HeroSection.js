import React from 'react'
import styles from './HeroSection.module.css'

const HeroSection = (props) => (
  <div className={styles.HeroSection}>
    <h1>HeroSection Component</h1>
    {Object.keys(props.Slides).map(slide => (
      <div key={slide}>
        <img src={props.Slides[slide].image} />
        <p>{props.Slides[slide].title}</p>
      </div>
    ))}
  </div>
)

export default HeroSection