import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Timeline.module.css';
import logo from '../components/images/mlsclogo.png'
import backgroundSmallerView from '../components/images/backgroundSmallerView.png'
import icon1 from '../components/images/search.png';
import icon2 from '../components/images/spy.png';
import icon3 from '../components/images/spyware.png';
import icon4 from '../components/images/poker.png';
import icon5 from '../components/images/gunIcon.png';
import gunRight from '../components/images/gun.png';
import MakeathonLogo from '../components/images/MakeathonLogo.png';
import Hearts from '../components/images/Hearts.png';
import Diamonds from '../components/images/Diamonds.png';
import Eventcard from '../components/events_components/Eventcard.jsx';
import chip from '../components/images/chip.png';
import spades from '../components/images/spades.png';
import diamonds1 from '../components/images/diamonds 1.png';
import diamonds2 from '../components/images/diamonds 2.png';

// Custom hook for responsive breakpoints
const useResponsiveSize = () => {
  // Define our breakpoints
  const breakpoints = {
    mobile: 600,
    tablet: 834,
    smallDesktop: 1024,
    desktop: 1200
  };
  
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Return object with boolean values for each breakpoint
  return {
    isMobile: windowSize.width <= breakpoints.mobile,
    isTablet: windowSize.width > breakpoints.mobile && windowSize.width <= breakpoints.tablet,
    isSmallDesktop: windowSize.width > breakpoints.tablet && windowSize.width <= breakpoints.smallDesktop,
    isDesktop: windowSize.width > breakpoints.smallDesktop,
    windowSize
  };
};

// Bigger View port component has display block when media query does not hit
const BiggerViewPort = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const cardRef = useRef(null);
  const buttonRefs = useRef([]);
  const { isMobile, isTablet, isSmallDesktop } = useResponsiveSize();
  
  const handleEventClick = (eventId) => {
    setSelectedEvent(eventId);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target) && !buttonRefs.current.some((button) => button && button.contains(event.target))) {
        setSelectedEvent(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Define icons for all 9 events (reusing icons as needed)
  const eventIcons = [icon1, icon2, icon3, icon4, icon5, icon1, icon2, icon3, icon4];
  
  return (
    <div className={styles.timeline_container}>
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
      <img className={styles.MLSCLogoBigger} src={logo} alt="MLSC Logo" />
      {selectedEvent && (
        <div className={`${styles.eventcard} ${selectedEvent ? styles.show : ''}`} ref={cardRef}>
          <div className={styles.eventCardContent}>
            <Eventcard name={selectedEvent} />
          </div>
          <button 
            className={styles.backButton}
            onClick={() => setSelectedEvent(null)}
            aria-label="Close event details"
          >
            <img src={gunRight} alt="Close" />
          </button>
        </div>
      )}

      <div className={styles.menu} id="menu">
        <ul>
          {[...Array(9)].map((_, index) => (
            <li key={index}>
              <button
                ref={(el) => (buttonRefs.current[index] = el)}
                style={{ '--icon': index + 1 }}
                className={`${styles.icon} ${styles.iconHoverEffect}`}
                id={`b${index + 1}`}
                onClick={() => handleEventClick(`EVENT ${index + 1}`)}
                aria-label={`Event ${index + 1}`}
              >
                <img src={eventIcons[index]} alt={`Event_${index + 1}`}></img>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.loading_disc} id="disc">
        <img className={styles.chip} src={chip} alt="Chip"></img>
        <img className={styles.MakeathonLogoBigger} src="https://res.cloudinary.com/dljpfochn/image/upload/v1745520986/hackspire_flex-removebg-preview_vu18rv.png" alt="Makeathon Logo" />
      </div>
    </div>
  );
};

// Burger menu navigation component
const BurgerAndNavPortion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Improve navigation links for better accessibility
  const navLinks = [
    { text: "Home", path: "/" },
    { text: "About", path: "/aboutus" },
    { text: "Tracks", path: "/tracks" },
    { text: "Timeline", path: "/timeline" },
    { text: "Sponsors", path: "/" }
  ];

  return (
    <>
      <div
        className={`${styles.extension} ${isOpen ? styles.leftToRight : ""}`}
        id="extension"
      >
        {navLinks.map((link, index) => (
          <div className={styles.navLink} key={index}>
            <a 
              className={`${isOpen ? styles.up : ""}`} 
              href={link.path}
            >
              {link.text}
            </a>
          </div>
        ))}
      </div>

      <div className={styles.rightSide}>
        <div
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
          onClick={toggleNav}
        >
          <div
            className={`${styles.line} ${isOpen ? styles.disappear : ""}`}
            id="firstLine"
          ></div>
          <div
            className={`${styles.line} ${styles.absolute} ${isOpen ? styles.disappear : ""}`}
            id="secondLine"
          ></div>
          <div
            className={`${styles.line} ${styles.absolute} ${isOpen ? styles.tiltLeft : ""}`}
            id="thirdLine"
          ></div>
          <div
            className={`${styles.line} ${styles.absolute} ${isOpen ? styles.tiltRight : ""}`}
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
  const { isMobile, windowSize } = useResponsiveSize();
  
  const handleEventClick = (eventId) => {
    setSelectedEvent(eventId);
  };

  const crossEvent = () => {
    setSelectedEvent(null);
  };

  // Define icons for all 9 events (reusing icons as needed)
  const eventIcons = [icon1, icon2, icon3, icon4, icon5, icon1, icon2, icon3, icon4];
  
  // CSS classes for positioning the icons
  const iconClasses = [
    styles.icon1, styles.icon2, styles.icon3, styles.icon4, styles.icon5,
    styles.icon6, styles.icon7, styles.icon8, styles.icon9
  ];

  return (
    <div
      className={styles.timeline_container_SVP}
      style={{ backgroundImage: `url(${backgroundSmallerView})` }}
    >
      <div className={styles.leftHeader}>
        <img src={logo} alt="MLSC Logo" />
      </div>

      <BurgerAndNavPortion />

      {selectedEvent && (
        <div className={`${styles.eventcard} ${selectedEvent ? styles.display : ''}`} ref={cardRef}>
          <div className={styles.crossButton} onClick={crossEvent}></div>
          <Eventcard name={selectedEvent} />
        </div>
      )}

      {/* Dynamic rendering of all event buttons */}
      {[...Array(9)].map((_, index) => (
        <button
          key={index}
          ref={(el) => (buttonRefs.current[index] = el)}
          className={iconClasses[index] || styles.additionalIcon}
          onClick={() => handleEventClick(`EVENT ${index + 1}`)}
        >
          <img src={eventIcons[index]} alt={`Event ${index + 1}`} />
        </button>
      ))}

      <div className={styles.MakeathonLogo}>
        <img src="https://res.cloudinary.com/dljpfochn/image/upload/v1745520986/hackspire_flex-removebg-preview_vu18rv.png" alt="MakeathonLogo" />
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
  const { isMobile } = useResponsiveSize();
  
  // Conditional rendering based on screen size
  // The CSS media queries will handle hiding/displaying these components,
  // but this helps with performance by not rendering both on all devices
  return (
    <>
      {!isMobile && <BiggerViewPort />}
      {isMobile && <SmallerViewPort />}
    </>
  )
}

export default Timeline;

