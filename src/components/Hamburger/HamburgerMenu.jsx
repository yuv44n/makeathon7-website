import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './HamburgerMenu.module.css';

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const location = useLocation();

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Tracks', path: '/tracks' },
    { name: 'Sponsors', path: '/sponsors' },
  ];

  const toggleMenu = () => {
    if (open) {
      setAnimateOut(true);
      setTimeout(() => {
        setOpen(false);
        setAnimateOut(false);
      }, 600); // same as CSS animation duration
    } else {
      setOpen(true);
    }
  };

  const closeMenu = () => {
    toggleMenu();
  };

  return (
    <>
<<<<<<< HEAD
      <div className={`${styles.hamburger} ${open ? styles.active : ''}`} onClick={toggleMenu}>
=======
      <div className={styles.hamburger} onClick={toggleMenu}>
>>>>>>> d1409466d8de9c9b75ea57ff104c3e10bd3fb532
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {open && (
        <div className={`${styles.menuOverlay} ${animateOut ? styles.fadeOut : styles.fadeIn}`}>
          <ul className={`${styles.menuList} ${animateOut ? styles.fadeTextOut : styles.fadeTextIn}`}>
            {pages
              .filter(page => page.path !== location.pathname)
              .map(page => (
                <li key={page.path}>
                  <Link to={page.path} onClick={closeMenu}>
                    {page.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default HamburgerMenu;
