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
      <li ><Link className={styles.listItem} href='/dc'>DC</Link></li>
      <li ><Link className={styles.listItem} href='/rr'>RR</Link></li>
      <li ><Link className={styles.listItem} href='/lsg'>LSG</Link></li>
      <li ><Link className={styles.listItem} href='/gt'>GT</Link></li>
      <li ><Link className={styles.listItem} href='/pbks'>PBKS</Link></li>
    </ul>
  )
}
