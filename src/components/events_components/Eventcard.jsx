import React from 'react'
import styles from '../../styles/Timeline.module.css'
import eventsdata from '../../data/eventsdata.json'
function Eventcard  ({name}) {
    const card= eventsdata.find(card => card.id === name);
    return (
        <div className={styles.background}>
            <div className={styles.timeline}>
              <p>EVENT: {card.id}</p>
              <br/>
              <p>DATE: {card.date}</p>
              <p>TIME: {card.time}</p>
              <p>VENUE: {card.venue}</p>
              <br/>
              <p className={styles.description}>{card.description}</p>  
            </div>
        </div>  
    )
}
export default Eventcard