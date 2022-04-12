import React from 'react'
import styles from './ProductSlider.module.css'
import ProductCard from '../ProductCard/ProductCard.js'
import Slider from 'react-slick'
import arrow_icon from '../../assets/images/arrow-icon.svg'

const arrowStyles = {
  width: '24px',
  height: '42px',
  zIndex: '100',
  transform: 'translateY(calc(-100% - 21px))'
}

const ArrowTemplate = (props, config) => {
  const { className, style, onClick } = props
  return (
    <div className={className} style={{...style, ...arrowStyles, ...config}} onClick={onClick} />
  )
}

const NextArrow = (props) => {
  let config = {
    right: 'calc(-100% + 20px)',
    padding: '0 50%',
    background: `url(${arrow_icon}) no-repeat`
  }
  return ArrowTemplate(props, config)
}

const PrevArrow = (props) => {
  let config = {
    left: 'calc(-100% + 20px)',
    padding: '0 50%',
    background: `url(${arrow_icon}) no-repeat`,
    transform: 'rotate(180deg) translateY(calc(200% - 21px))'
  }
  return ArrowTemplate(props, config)
}

const ProductSlider = (props) => {

  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  const productCards = props.Slides.map( (data, index) => (
    <ProductCard Slide={data} key={index} />
  ))

  return (
    <div className={styles.ProductSlider}>
      <h1>New Arrivals</h1>
      <div className={styles.BoundaryBox}>
        <Slider {...settings}>
          {productCards}
        </Slider>
      </div>
    </div>
  )
}

export default ProductSlider