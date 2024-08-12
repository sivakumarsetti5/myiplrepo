import React from 'react'
import styles from './KKR.module.css'
export const KKR = () => {
    return (
        <div className={styles.homeContainer}>
            <div>
                <div className={styles.titleCont}>
                    <div className={styles.imgContainer}>
                    <img className={styles.logo} src='https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/640px-Kolkata_Knight_Riders_Logo.svg.png' alt='ipl logo' />
                    </div>
                    <h1 className={styles.team}>Kolkata Knight  <br/>Riders 2024</h1>
                </div>
                <p className={styles.about}>The 2024 season was the 17th season for the Indian Premier League franchise Kolkata Knight Riders. They were one of the ten teams competed in the 2024 Indian Premier League. They finished at the 7th place in previous season's League stage.
                 Ahead of the 2024 season, Shreyas Iyer returned as the captain after missing out the 2023 season due to back injury.After their 9th win on 11 May 2024, Kolkata became the first team to be qualified for the Playoffs. After their abandoned match on 13 May 2024, 
                 Kolkata qualifed for the Qualifier 1.
                 After defeating Sunrisers Hyderabad in the Qualifier 1 played on 21st May at Ahmedabad, Kolkata became the first team to advance to the 2024 final for the 4th time.
                
                </p>
            </div>
            <img className={styles.teamImage} src='https://assets.bcci.tv/watermarkoutput/bcci/photos/1456/1da01778-c4f2-4621-b5a8-5c8b81fdedab.jpg' alt="ipl image" />
        </div>
    )
}

