import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import styles from '../Header.module.css'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className={styles.bg}>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout