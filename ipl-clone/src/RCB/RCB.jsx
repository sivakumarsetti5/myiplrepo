import React from 'react'
import styles from './RCB.module.css'
export const RCB = () => {
    return (
        <div className={styles.homeContainer}>
            <div>
                <div className={styles.titleCont}>
                    <div className={styles.imgContainer}>
                    <img className={styles.logo} src='https://upload.wikimedia.org/wikipedia/en/0/0a/Royal_Challengers_Bengaluru_Logo.png' alt='ipl logo' />
                    </div>
                    <h1 className={styles.team}>Royal Challengers <br/>Bangalore 2024</h1>
                </div>
                <p className={styles.about}>Royal Challengers Bangalore (RCB), officially known as Royal Challengers Bengaluru, are a professional cricket franchise based in Bangalore, Karnataka, 
                    competing in the Indian Premier League (IPL). Founded in 2008 by United Spirits, 
                    the team is named after the company's liquor brand, Royal Challenge. 
                    The M. Chinnaswamy Stadium in Bangalore serves as their home ground.
                   Royal Challengers have finished as runners-up on three occasions in 2009, 2011, and 2016, 
                   and have qualified for the playoffs in nine out of seventeen seasons. 
                   The franchise has also competed in the Champions League Twenty20, finishing as runners-up in the 2011 season.
                </p>
            </div>
            <img className={styles.teamImage} src='https://assets.bcci.tv/watermarkoutput/bcci/photos/1450/7af4c86e-2fca-4e33-acf3-da239e3a10c2.jpg' alt="ipl image" />
        </div>
    )
}

