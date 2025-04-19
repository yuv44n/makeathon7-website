import React from 'react';
import styles from './Footer.module.css';
import Logo from "./assets/Logo.png"
import Facebook from "./assets/fb.png"
import Linkedin from "./assets/linkedin.png"
import Insta from "./assets/insta.png"
import Phone from "./assets/newsec.png"
import Email from "./assets/mail.png"
import Location from "./assets/location.png"



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerLeft}>
          <div className={styles.branding}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            <div className={styles.textBlock}>
              <h2>MLSC</h2>
              <p>Empowering Tech Enthusiasts</p>
            </div>
          </div>
          <div className={styles.socialIcons}>
            <img src={Facebook}  />
            <img src={Linkedin} />
            <img src={Insta}  />
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.contactContainer}>
            <div className={styles.contactLeft}>
              <div className={styles.contactItem}>
                <img src={Phone}  />
                <span>General Secretory<br />+91 1234567890</span> 
              </div>
              <div className={styles.contactItem}>
                <img src={Phone} />
                <span>Finance Secretory <br />+91 1234567890</span>
              </div>
              <div className={styles.contactItem}>
                <img src={Email} alt="Email" />
                <span>mlsc@example.com</span>
              </div>
            </div>
            <div className={styles.contactRight}>
              <div className={styles.contactItem}>
                <img src={Location} alt="Location" />
                <span>Somewhere, India</span>
              </div>
              <p className={styles.role}>Made with 💻 by MLSC Team</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
