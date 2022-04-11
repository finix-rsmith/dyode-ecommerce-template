import React, {useState, useEffect} from 'react'
import styles from './FooterMenu.module.css'
import NavLinks from '../NavLinks/NavLinks.js'

const FooterMenu = (props) => {

  const [PrimaryMenu, setPrimaryMenu] = useState(true)
  const [SecondaryMenu, setSecondaryMenu] = useState(true)

  const deviceCheck = () => {
    let windowWidth = window.innerWidth
    switch (true) {
      case windowWidth < 600:
        return 'mobile'
      case windowWidth > 599:
        return 'desktop'
    }
  }

  const toggleIcon = (menu) => {
    let menuState = ''
    !menu ? menuState = '+' : menuState = '-'
    return menuState
  }

  const togglePrimaryMenu = () => {
    setPrimaryMenu(!PrimaryMenu)
  }

  const toggleSecondaryMenu = () => {
    setSecondaryMenu(!SecondaryMenu)
  }

  useEffect(() => {
    let device = deviceCheck()
    if (device == 'mobile') {
      setPrimaryMenu(false)
      setSecondaryMenu(false)
    }
  }, [deviceCheck()])

  return (
    <div className={styles.FooterMenu}>
      <section className={styles.CustomerServiceNav}>
        <h4>Customer Service <a className={styles.ToggleButton} onClick={togglePrimaryMenu}>{toggleIcon(PrimaryMenu)}</a></h4>
        { (PrimaryMenu) ? <NavLinks Links={props.Primary} /> : <ul/> }
      </section>
      <section className={styles.CompanyNav}>
        <h4>Company <a className={styles.ToggleButton} onClick={toggleSecondaryMenu}>{toggleIcon(SecondaryMenu)}</a></h4>
        { (SecondaryMenu) ? <NavLinks Links={props.Secondary} /> : <ul/> }
      </section>
      <section className={styles.SocialNav}>
        <h4>Follow Us</h4>
        <NavLinks Links={props.Social} />
      </section>
    </div>
  )
}

export default FooterMenu