import React, { useState, useRef, useEffect } from 'react';
import Eventcard from '../components/events_components/Eventcard.jsx';
import styles from '../styles/Timeline.module.css';
import icon1 from '../components/images/search2 1.png';
import icon2 from '../components/images/spy 2.png';
import icon3 from '../components/images/spyware 3.png';
import icon4 from '../components/images/gun 1.png';
import icon5 from '../components/images/air2 1.png';
import chip from '../components/images/chip.png';
import spades from '../components/images/spades.png';
import diamonds1 from '../components/images/diamonds 1.png';
import diamonds2 from '../components/images/diamonds 2.png';

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
    >
      <div className={styles.lines} id="lines"></div>
      <div className={styles.spades} id="spiral1">
        <img src={spades} alt="spades"></img>
      </div>
      <div className={styles.diamonds1} id="spiral2">
        <img src={diamonds1} alt="diamonds1"></img>
      </div>
      <div className={styles.diamonds2} id="spiral3">
        <img src={diamonds2} alt="diamonds2"></img>
      </div>
      {selectedEvent && (
        <div className={`${styles.eventcard} ${selectedEvent ? styles.show : ''}`} ref={cardRef}>
          <Eventcard name={selectedEvent} />
        </div>
      )}
      <h1 className={styles.timeline}>TIMELINE PAGE</h1>
      <div className={styles.menu} id="menu">
        <ul>
          <li>
            <button
              ref={(el) => (buttonRefs.current[0] = el)}
              style={{ '--icon': 1 }}
              className={styles.icon}
              id="b1"
              onClick={() => handleEventClick('EVENT 1')}
            >
              <img src={icon1} alt="Event_1"></img>
            </button>
          </li>
          <li>
            <button
              ref={(el) => (buttonRefs.current[1] = el)}
              style={{ '--icon': 2 }}
              className={styles.icon}
              id="b2"
              onClick={() => handleEventClick('EVENT 2')}
            >
              <img src={icon2} alt="Event_2"></img>
            </button>
          </li>
          <li>
            <button
              ref={(el) => (buttonRefs.current[2] = el)}
              style={{ '--icon': 3 }}
              className={styles.icon}
              id="b3"
              onClick={() => handleEventClick('EVENT 3')}
            >
              <img src={icon3} alt="Event_3"></img>
            </button>
          </li>
          <li>
            <button
              ref={(el) => (buttonRefs.current[3] = el)}
              style={{ '--icon': 4 }}
              className={styles.icon}
              id="b4"
              onClick={() => handleEventClick('EVENT 4')}
            >
              <img src={icon4} alt="Event_4"></img>
            </button>
          </li>
          <li>
            <button
              ref={(el) => (buttonRefs.current[4] = el)}
              style={{ '--icon': 5 }}
              className={styles.icon}
              id="b5"
              onClick={() => handleEventClick('EVENT 5')}
            >
              <img src={icon5} alt="Event_5"></img>
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.loading_disc} id="disc">
        <img className={styles.chip} src={chip} alt="Event_5"></img>
      </div>
    </div>
  );
};

export default Timeline;