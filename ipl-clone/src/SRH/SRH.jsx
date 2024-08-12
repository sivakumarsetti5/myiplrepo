import React from 'react'
import styles from './SRH.module.css'
export const SRH = () => {
    return (
        <div className={styles.homeContainer}>
            <div>
                <div className={styles.titleCont}>
                    <div className={styles.imgContainer}>
                    <img className={styles.logo} src='https://upload.wikimedia.org/wikipedia/en/e/eb/Sunrisers_Hyderabad.png' alt='ipl logo' />
                    </div>
                    <h1 className={styles.team}>Sun Risers <br/>Hyderabad 2024</h1>
                </div>
                <p className={styles.about}>The 2024 season was the 12th season for the Indian Premier League franchise Sunrisers Hyderabad. 
                    They were one of the ten teams competed in the 2024 Indian Premier League. 
                    They finished at the last place in previous season's League stage.
                    Ahead of the 2024 season, Pat Cummins was appointed as the captain following a poor 2023 season led by Aiden Markram.
                    After their abandoned match on 16 May 2024, Hyderabad qualified for the Playoffs.
                    They finished the League stage at the 2nd place with 8 wins and 5 losses, garnering 17 points and seeding their place in the Qualifier 1.
                </p>
            </div>
            <img className={styles.teamImage} src='https://images.firstpost.com/uploads/2024/04/Sunrisers-Hyderabad1-2024-04-692bb5ed59c63db10c08c28f0935a2e3-1200x675.jpg?im=FitAndFill=(596,336)' alt="ipl image" />
        </div>
    )
}

