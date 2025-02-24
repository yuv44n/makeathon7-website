import React from 'react';
import styles from './PolaroidA.module.css'; // Import the CSS module

const SmallBox = () => {
  return (
    <div className={styles.polaroid}>
      <div className={styles.blackBox}>
        <img
          className={styles.image}
          src="/Sponsors/facebook.png" // Use the relative path from the  directory
          alt="Facebook"
        />
      </div>
      <div className={styles.caption}>Facebook</div>
    </div>
  );
};

export default SmallBox;