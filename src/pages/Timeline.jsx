import React, { useState, useRef, useEffect } from 'react';
import logo from '../components/images/mlsclogo.png'
import backgroundBiggerView from '../components/images/backgroundBiggerView.png';
import backgroundSmallerView from '../components/images/backgroundSmallerView.png'
import icon1 from '../components/images/search.png';
import icon2 from '../components/images/spy.png';
import icon3 from '../components/images/spyware.png';
import icon4 from '../components/images/poker.png';
import icon5 from '../components/images/gunIcon.png';
import icon6 from '../components/images/man.png';
import icon7 from '../components/images/poker.png';
import gunRight from '../components/images/gun.png';
import MakeathonLogo from '../components/images/MakeathonLogo.png';
import Hearts from '../components/images/Hearts.png';
import Diamonds from '../components/images/Diamonds.png';
import Eventcard from '../components/events_components/Eventcard.jsx';
import styles from '../styles/Timeline.module.css';


// Bigger View port component has display block when media query does not hit

const BiggerViewPort = () => {
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
      style={{ backgroundImage: `url(${backgroundBiggerView})` }}
    >
      {selectedEvent && (
        <div className={styles.eventcard} ref={cardRef}>
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








// Smaller view port components begin 

const BurgerAndNavPortion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={`${styles.extension} ${isOpen ? styles.leftToRight : ""}`}
        id="extension"
      >
        <div className={styles.navLink}>
          <a className={`${isOpen ? styles.up : ""}`} href="https://www.google.com/">
            Home
          </a>
        </div>
        <div className={styles.navLink}>
          <a className={`${isOpen ? styles.up : ""}`} href="https://www.google.com/">
            About
          </a>
        </div>
        <div className={styles.navLink}>
          <a className={`${isOpen ? styles.up : ""}`} href="https://www.google.com/">
            Tracks
          </a>
        </div>
        <div className={styles.navLink}>
          <a className={`${isOpen ? styles.up : ""}`} href="https://www.google.com/">
            Timeline
          </a>
        </div>
        <div className={styles.navLink}>
          <a className={`${isOpen ? styles.up : ""}`} href="https://www.google.com/">
            Sponsors
          </a>
        </div>
      </div>

      <div className={styles.rightSide}>
        <div
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""
            }`}
          onClick={toggleNav}
        >
          <div
            className={`${styles.line} ${isOpen ? styles.disappear : ""}`}
            id="firstLine"
          ></div>
          <div
            className={`${styles.line} ${styles.absolute} ${isOpen ? styles.disappear : ""
              }`}
            id="secondLine"
          ></div>
          <div
            className={`${styles.line} ${styles.absolute} ${isOpen ? styles.tiltLeft : ""
              }`}
            id="thirdLine"
          ></div>
          <div
            className={`${styles.line} ${styles.absolute} ${isOpen ? styles.tiltRight : ""
              }`}
            id="fourLine"
          ></div>
          <div
            className={`${styles.line} ${isOpen ? styles.disappear : ""}`}
            id="fifthLine"
          ></div>
        </div>
      </div>
    </>
  );
};

const SmallerViewPort = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const cardRef = useRef(null);
  const buttonRefs = useRef([]);
  const handleEventClick = (eventId) => {
    setSelectedEvent(eventId);
  };

  const crossEvent = (event) => {
    setSelectedEvent(null);
  };

  return (
    <div
      className={styles.timeline_container_SVP}
      style={{ backgroundImage: `url(${backgroundSmallerView})` }}
    >
      <div className={styles.leftHeader}>
        <img src={logo} alt="MLSC Logo" />
      </div>


      {selectedEvent && (
        <div className={styles.eventcard} ref={cardRef}>
          <div className={styles.crossButton} onClick={() => crossEvent('event')}></div>
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

      {/* <button
        ref={(el) => (buttonRefs.current[5] = el)}
        className={styles.icon6}
        onClick={() => handleEventClick('EVENT 6')}
      >
        <img src={icon6} alt="Gun Event" />
      </button>

      <button
        ref={(el) => (buttonRefs.current[6] = el)}
        className={styles.icon7}
        onClick={() => handleEventClick('EVENT 7')}
      >
        <img src={icon7} alt="Air Event" />
      </button> */}

      <div className={styles.gun}>
        <img src={gunRight} alt="Gun" />
      </div>

      <div className={styles.MakeathonLogo}>
        <img src={MakeathonLogo} alt="MakeathonLogo" />
      </div>

      <div className={styles.Hearts}>
        <img src={Hearts} alt="Hearts" />
      </div>


      <div className={styles.Diamonds}>
        <img src={Diamonds} alt="Diamonds" />
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <>
      <BiggerViewPort />
      <BurgerAndNavPortion />
      <SmallerViewPort />
    </>
  )
}

export default Timeline;

