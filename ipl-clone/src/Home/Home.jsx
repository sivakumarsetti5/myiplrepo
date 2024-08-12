import React from 'react'
import styles from './Home.module.css'
export const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div>
                <div className={styles.titleCont}>
                    <div className={styles.imgContainer}>
                    <img className={styles.logo} src='https://www.jagranimages.com/images/newimg/21082020/21_08_2020-ipl_logo_20650553.jpg' alt='ipl logo' />
                    </div>
                    <h1 className={styles.team}>Indian Premier <br/>League 2024</h1>
                </div>
                <p className={styles.about}>The Indian Premier League (IPL), also known as the TATA IPL for sponsorship reasons, 
                    is a men's Twenty20 (T20) cricket league held annually in India. 
                    Founded by the BCCI (the Board of Control for Cricket in India) in 2007, 
                    the league features ten state or city-based franchise teams. 
                    The IPL usually takes place during the summer, between March and May each year. 
                    It has an exclusive window in the ICC Future Tours Programme, 
                    resulting in fewer international cricket tours occurring during the IPL seasons.
                </p>
            </div>
            <img className={styles.teamImage} src='https://www.hindustantimes.com/ht-img/img/2024/03/21/550x309/IPL2024_captains_1711022779905_1711022790591.jpg' alt="ipl image" />
        </div>
    )
}

