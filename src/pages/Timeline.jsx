import React from 'react'
import Eventcard from '../components/events_components/Eventcard.jsx'
import backimg from '../components/images/back4.png'
import styles from '../styles/Timeline.module.css'
import icon1 from '../components/images/search2 1.png'
import icon2 from '../components/images/spy 2.png'
import icon3 from '../components/images/spyware 3.png'
import icon4 from '../components/images/gun 1.png'
import icon5 from '../components/images/air2 1.png'
const Timeline = () => {
  return (
    <>
        <div className={styles.timeline_container} style={{ backgroundImage: `url(${backimg})` }}>
              <div className={styles.eventcard}>
                <Eventcard name='EVENT 1' />
              </div>
            <h1 className={styles.timeline}>TIMELINE PAGE</h1>            
            <button className={styles.icon1} id="b1">
              
              <img src={icon1} alt="Event_1"></img>
            </button>  
            <button className={styles.icon2} id="b2">
              <img src={icon2} alt="Event_2"></img>
            </button> 
            <button className={styles.icon3} id="b3">
              <img src={icon3} alt="Event_3"></img>
            </button>
            <button className={styles.icon4} id="b4">
              <img src={icon4} alt="Event_4"></img>
            </button>
            <button className={styles.icon5} id="b5">
              <img src={icon5} alt="Event_5"></img>
            </button>  
            
        </div>
    </>
  )
}



export default Timeline