import React from 'react'
import styles from './PromoBar.module.css'

const PromoBar = (props) => (
  <div className={styles.PromoBar}>
    <p>{props.Message}</p>
  </div>
)

export default PromoBar