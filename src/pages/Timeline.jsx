import React from 'react'
import Eventcard from '../components/events_components/Eventcard.jsx'
import backimg from '../components/images/back4.png'
import styles from '../styles/Timeline.module.css'

const Timeline = () => {
  return (
    <>
        <div className={styles.timeline_container} style={{ backgroundImage: `url(${backimg})` }}>
            <h1 className={styles.timeline}>Timeline Page</h1>
            
            <Eventcard name={"EVENT 2"} />
        </div>
    </>
  )
}



export default Timeline