import React from 'react'
import styles from './SignUp.module.css'

const SignUp = (props) => (
  <div className={styles.SignUp}>
    <h2><img src={props.Content.icon} /> {props.Content.title}</h2>
    <div className={styles.Block}>
      <h4>{props.Content.subtitle}</h4>
    </div>
    <div className={styles.Block}>
      <form>
        <input type='email' placeholder={props.Content.callToAction} required />
        <button type='submit'>{props.Content.buttonText}</button>
      </form>
    </div>
  </div>
)

export default SignUp