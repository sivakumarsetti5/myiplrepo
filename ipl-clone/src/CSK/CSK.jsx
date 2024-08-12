import React from 'react'
import styles from './CSK.module.css'
export const CSK = () => {
    return (
        <div className={styles.homeContainer}>
            <div>
                <div className={styles.titleCont}>
                    <div className={styles.imgContainer}>
                    <img className={styles.logo} src='https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png' alt='ipl logo' />
                    </div>
                    <h1 className={styles.team}>Chenai Super <br/>Kings 2024</h1>
                </div>
                <p className={styles.about}>Chennai Super Kings (CSK) is an Indian professional cricket franchise based in Chennai, Tamil Nadu. The team competes in the Indian Premier League (IPL) and was one of the eight franchises incorporated when the league was established in 2008. The team plays its home matches at the M. A. Chidambaram Stadium in Chennai and is owned by Chennai Super Kings Cricket Limited.

                 Super Kings is the joint-most successful IPL franchise, having won five IPL titles (shared with Mumbai Indians). In the IPL, they have appeared in a record 10 finals and qualified for the playoff stages 12 times out of the 15 seasons they have played, more than any other team.
                </p>
            </div>
            <img className={styles.teamImage} src='https://static.cricketaddictor.com/wp-content/uploads/2024/02/Image-2024-02-08T151316.620.jpg?q=80' alt="ipl image" />
        </div>
    )
}

