import React from 'react'
import styles from './ProductCategories.module.css'

const ProductCategories = (props) => {

  const ProductCategoryTemplate = props.Categories.map( (data, index) => (
    <div className={styles.CategoryCard} key={index}>
      <a href={data.link}>
        <img src={data.image} />
        <div className={styles.TextBox}>
          <h2>{data.title}</h2>
        </div>
      </a>
    </div>
  ))

  return (
    <div className={styles.ProductCategories}>
      <div className={styles.BoundaryBox}>
        {ProductCategoryTemplate}
      </div>
    </div>
  )
}

export default ProductCategories