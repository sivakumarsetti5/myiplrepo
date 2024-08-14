import React from 'react'
import styles from './MI.module.css'
import Image from 'next/image'
export const MI = () => {
    return (
        <div className={styles.homeContainer}>
            <div>
                <div className={styles.titleCont}>
                    <div className={styles.imgContainer}>
                    <Image className={styles.logo} 
                    src='https://icon2.cleanpng.com/20180712/kao/aaw72bheg.webp' 
                    alt='ipl logo' 
                    height={100}
                    width={100}/>
                    </div>
                    <h1 className={styles.team}>Mumbai Indians 2024</h1>
                </div>
                <p className={styles.about}>Mumbai Indians are a professional franchise cricket team based in Mumbai, Maharashtra, that competes in the Indian Premier League. 
                    Founded in 2008, the team is owned by Indias biggest conglomerate, Reliance Industries, through its 100% subsidiary Indiawin Sports.
                    Since its establishment, the team has played its home matches in the 33,108-capacity Wankhede Stadium in Mumbai.
                    In 2017, the Mumbai Indians became the first franchise to cross the $100 million mark in brand value among the IPL franchises.
                    The brand value of Mumbai Indians, in 2019, is estimated to be around ₹809 crore (roughly $115 million), 
                    the highest among all the IPL franchises for the fourth consecutive year.
                </p>
            </div>
            <Image className={styles.teamImage} 
            src='https://crickettimes.com/wp-content/uploads/2023/12/Mumbai-Indians-6.webp' 
            alt="ipl image" 
            height={350}
            width={550}/>
        </div>
    )
}

