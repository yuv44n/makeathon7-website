import React, { useState, useEffect } from 'react';
import styles from '../styles/Sponsors.module.css';
import stylesLogo from "./IDK.module.css";
// import PagesT from '../components/SponsorsPageInside/FullExport/PagesT.jsx';
// import PagesP from '../components/SponsorsPageInside/FullExport/PagesP.jsx';
// import PagesA from '../components/SponsorsPageInside/FullExport/PagesA.jsx';
// import ClosedFile from '../components/SponsorsPageInside/ClosedFiles/ClosedFile.jsx';
import Whysus from '../components/SponsorsPageInside/Sus/WhySus.jsx';
// import Image from '/Sponsors/Girl.png';

const Sponsors = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let content;
  
   if (scrollPosition > 150) 
    {
    content = <Whysus />
    } 

  return (
    <>
      <div className={`${styles.wrapper} ${scrollPosition > 150 ? styles.scrolled : ''} ${scrollPosition>600 ? styles.wrapperWSUS: ''}`}>
        <div className={styles.container}>  
          <div className={styles.AbsoluteFixed}>
            <img className={styles.logo} src="/mlsclogo.png" alt="MLSC Logo" />
            <div className={stylesLogo.logoContainer}> {/* Wrap logos inside a div */}
              <img className={stylesLogo.devfolio} src="/Sponsors/Devfolio-white.png" alt="DEVFOLIO LOGO" />
              <img className={stylesLogo.ethindia} src="/Sponsors/ethindia-light.png" alt="ETHINDIA LOGO" />
            </div>
            {/* <img className={styles.menu} src="/Sponsors/menu.png" alt="Menu" />
            <img className={styles.AnyaF} src="/Sponsors/AnyaF.png" alt="Shh" /> */}
            <div>{content}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;