import React from 'react'
import styles from './NavLinks.module.css'

const NavLinks = (props) => {

  const LinkTemplate = props.Links.map( (data, index) => (
    <li className={data.title} key={index}>
      <a href={data.link}>
        { data.icon ? <img src={data.icon} alt={data.title} /> : data.title }
      </a>
    </li>
  ))

  return (
    <div className={styles.NavLinks}>
      { props.Mobile ? <img src={props.Mobile} /> : <div/> }
      <ul>
        {LinkTemplate}
      </ul>
    </div>
  )
}

export default NavLinks