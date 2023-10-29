import React from 'react'
import styles from '../Header.module.css'
import img from '../assets/logoVaikra2.png'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.divTitle}>
        <div className={styles.title}>
        Воины Давида
        </div>
        <img className={styles.img} src={img}/>
      </div>
    </div>
  )
}

export default Header