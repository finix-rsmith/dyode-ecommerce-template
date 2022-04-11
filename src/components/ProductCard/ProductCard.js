import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = (props) => (
  <div className={styles.ProductCard}>
    <img src={props.Slide.image} />
    <h4>{props.Slide.title}</h4>
    <p className={styles.Subtitle}>{props.Slide.subtitle}</p>
    <p className={styles.Price}>{props.Slide.price}</p>
  </div>
)

export default ProductCard