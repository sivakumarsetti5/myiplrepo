import React from 'react'
import styles from './Menu.module.css'
import Link from 'next/link'
export const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li ><Link className={styles.listItem} href='/home'>Home</Link></li>
      <li ><Link className={styles.listItem} href='/rcb'>RCB</Link></li>
      <li ><Link className={styles.listItem} href='/csk'>CSK</Link></li>
      <li ><Link className={styles.listItem} href='/mi'>MI</Link></li>
      <li ><Link className={styles.listItem} href='/srh'>SRH</Link></li>
      <li ><Link className={styles.listItem} href='/kkr'>KKR</Link></li>
      <li ><Link className={styles.listItem} href='/home'>DC</Link></li>
      <li ><Link className={styles.listItem} href='/home'>RR</Link></li>
      <li ><Link className={styles.listItem} href='/home'>LSG</Link></li>
      <li ><Link className={styles.listItem} href='/home'>GT</Link></li>
      <li ><Link className={styles.listItem} href='/home'>PBKS</Link></li>
    </ul>
  )
}
