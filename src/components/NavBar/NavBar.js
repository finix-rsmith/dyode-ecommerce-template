import React from 'react'
import styles from './NavBar.module.css'
import BrandLogo from '../BrandLogo/BrandLogo.js'
import NavLinks from '../NavLinks/NavLinks.js'
import { mainNav, Icons, navUtilities } from '../../assets/SiteMap.js'

const NavBar = (props) => (
  <div className={styles.NavBar}>
    <BrandLogo Image={props.Logo} />
    <div className={styles.NavMenu}>
      <NavLinks Links={mainNav} Mobile={Icons.Nav} />
    </div>
    <div className={styles.NavUtility}>
      <NavLinks Links={navUtilities} />
    </div>
  </div>
)

export default NavBar