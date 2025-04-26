import React, { useState, useEffect } from 'react';
import styles from '../styles/Sponsors.module.css';
import PagesT from '../components/SponsorsPageInside/FullExport/PagesT.jsx';
import PagesT1 from '../components/SponsorsPageInside/FullExport/PagesT1.jsx'; // <-- New Import
import PagesP from '../components/SponsorsPageInside/FullExport/PagesP.jsx';
import PagesA from '../components/SponsorsPageInside/FullExport/PagesA.jsx';
import ClosedFile from '../components/SponsorsPageInside/ClosedFiles/ClosedFile.jsx';
import Whysus from '../components/SponsorsPageInside/Sus/WhySus.jsx';
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Sponsors = () => {
  const [sectionIndex, setSectionIndex] = useState(0);

  const getComponent = () => {
    switch (sectionIndex) {
      case 0: return <ClosedFile key="closedfile" />;
      case 1: return <PagesT key="pagest" />;
      case 2: return <PagesP key="pagesp" />;
      case 3: return <PagesA key="pagesa" />;
      case 4: return <Whysus key="whysus" />;
      default: return <ClosedFile key="closedfile" />;
    }
  };

  const goUp = () => setSectionIndex(prev => Math.max(prev - 1, 0));
  const goDown = () => setSectionIndex(prev => Math.min(prev + 1, 4));

  return (
    <div className={`${styles.wrapper} ${sectionIndex > 0 ? styles.scrolled : ""} ${sectionIndex === 4 ? styles.wrapperWSUS : ""}`}>
      <div className={styles.container}>
        <div className={styles.AbsoluteFixed}>
          <img className={styles.logo} src="/mlsclogo.png" alt="MLSC Logo" />
          <img className={styles.AnyaF} src="/Sponsors/AnyaF.png" alt="Shh" />

          {/* Navigation Arrows */}
          {sectionIndex > 0 && (
            <button onClick={goUp} className={styles.leftArrow}>🞀</button>
          )}
          {sectionIndex < 4 && (
            <button onClick={goDown} className={styles.rightArrow}>🞂</button>
          )}


          <AnimatePresence mode="wait">
            <motion.div
              key={getComponent()?.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {getComponent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};


export default Sponsors;
