import React from 'react';
import styles from './PolaroidT.module.css'; // Import the CSS module

const SmallBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.polaroid}>
        <div className={styles.blackBox}>
          <img
            className={styles.image}
            src="/Sponsors/Devfolio_Logo-Colored.png" // Use the relative path from the directory
            alt="DEVFOLIO LOGO"
          />
        </div>
      </div>

      <div className={styles.polaroid}>
        <div className={styles.blackBox}>
          <img
            className={styles.image}
            src="/Sponsors/Polygon_Logo-Colored.png" // Use the relative path from the directory
            alt="POLYGON LOGO"
          />
        </div>
      </div>
    </div>
  );
};

export default SmallBox;