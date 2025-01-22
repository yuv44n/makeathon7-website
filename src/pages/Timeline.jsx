import React from 'react'
import styles from '../styles/Timeline.module.css'


const Timeline = () => {
  return (
    <>
        <div className={styles.background}>
            <div className={styles.timeline}>
              <p>EVENT: EVENT 1</p>
              <br/>
              <p>DATE: 11/11/24</p>
              <p>TIME: 10:00 am</p>
              <p>VENUE: TAN AUDI</p>
              <br />
              <p className={styles.description}>This is the description for the <br/>event. It will be a great <br/>experience. We look forward <br/> to max participation.</p>
              
            </div>
            
        </div>
    </>
  )
}


export default Timeline