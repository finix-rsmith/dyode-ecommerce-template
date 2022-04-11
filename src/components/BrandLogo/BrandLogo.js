import React from 'react'
import styles from './BrandLogo.module.css'

const BrandLogo = (props) => (
  <div className={styles.BrandLogo}>
    <a href='/'>
      <img src={props.Image} className={styles.Logo} />
    </a>
  </div>
)

export default BrandLogo