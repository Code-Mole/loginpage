import React from 'react'
import styles from './component.module.css'
import Links from 'next/link'


function Navbar() {
  return (
    <div className={styles.NavContainer}>
        <div className={styles.Navigations}>
        <div className={styles.NavLogo}>
               <h1>MoleWeb</h1>
            </div>
            <div className={styles.NavLinks}>
               <Links id={styles.link} href='/'>Home</Links>
               <Links id={styles.link} href='login'>Login</Links>
               <Links id={styles.link} href='signup'>signup</Links>
            </div>
        </div>
    </div>
  )
}

export default Navbar