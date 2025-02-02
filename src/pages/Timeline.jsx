import React, { useState, useRef, useEffect } from 'react';
import Eventcard from '../components/events_components/Eventcard.jsx';
import backimg from '../components/images/back4.png';
import styles from '../styles/Timeline.module.css';
import icon1 from '../components/images/search2 1.png';
import icon2 from '../components/images/spy 2.png';
import icon3 from '../components/images/spyware 3.png';
import icon4 from '../components/images/gun 1.png';
import icon5 from '../components/images/air2 1.png';

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const cardRef = useRef(null); 
  const buttonRefs = useRef([]); 
  const handleEventClick = (eventId) => {
    setSelectedEvent(eventId); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target) && !buttonRefs.current.some((button) => button.contains(event.target))) {
        setSelectedEvent(null); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); 
  
  return (
    <div
    className={styles.timeline_container}
    style={{ backgroundImage: `url(${backimg})`}}
    >
      {selectedEvent && (
        <div className={`${styles.eventcard} ${selectedEvent ? styles.show : ''}`} ref={cardRef}>
          <Eventcard name={selectedEvent} />
        </div>
      )}
      
      <button
        ref={(el) => (buttonRefs.current[0] = el)}
        className={styles.icon1}
        onClick={() => handleEventClick('EVENT 1')}
      >
        <img src={icon1} alt="Search Event" />
      </button>

      <button
        ref={(el) => (buttonRefs.current[1] = el)}
        className={styles.icon2}
        onClick={() => handleEventClick('EVENT 2')}
      >
        <img src={icon2} alt="Spy Event" />
      </button>

      <button
        ref={(el) => (buttonRefs.current[2] = el)}
        className={styles.icon3}
        onClick={() => handleEventClick('EVENT 3')}
      >
        <img src={icon3} alt="Spyware Event" />
      </button>

      <button
        ref={(el) => (buttonRefs.current[3] = el)}
        className={styles.icon4}
        onClick={() => handleEventClick('EVENT 4')}
      >
        <img src={icon4} alt="Gun Event" />
      </button>

      <button
        ref={(el) => (buttonRefs.current[4] = el)}
        className={styles.icon5}
        onClick={() => handleEventClick('EVENT 5')}
      >
        <img src={icon5} alt="Air Event" />
      </button>

    </div>
  );
};

export default Timeline;